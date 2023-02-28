import { Handler } from "@netlify/functions";
import Mailjet from "node-mailjet";

const handler: Handler = async (event, context) => {
  // if no body, return error
  if (!event.body) {
    return {
      statusCode: 400,
      body: "No body",
    };
  }

  // use linq to dynamically build juicy key-value pairs for email vars
  const htmlContent: string[] = ["<h1>Squawk Market Contact Data:</h1>"];
  const body = JSON.parse(event.body);
  // loop at body keys
  for (const prop in body) {
    htmlContent.push(`<p><b>${prop}:</b> ${body[prop]}</p>`);
  }

  // construct email, from is the email
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC || "",
    process.env.MJ_APIKEY_PRIVATE || ""
  );

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "hi@fullstackcraft.com",
            Name: "Full Stack Craft",
          },
          To: [
            {
              Email: "hi@fullstackcraft.com",
              Name: "Full Stack Craft",
            },
          ],
          Subject: "Contact or Feature Request Form from Squawk Market",
          HTMLPart: htmlContent.join(""),
        },
      ],
    });
    return {
      statusCode: 200,
      body: "Email sent",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "Error sending email",
    };
  }
};

export { handler };
