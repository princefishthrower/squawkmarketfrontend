import * as React from "react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Constants } from "../../../constants/Constants";

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

export interface IFormProps {
  name: string;
  email: string;
  messagePlaceholder: string;
  onSubmitForm: (data: FieldValues) => void;
  isSuccessful: boolean;
}

export function Form(props: IFormProps) {
  const { name, email, messagePlaceholder, onSubmitForm, isSuccessful } = props;
  const [message, setMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    onSubmitForm(data);
  };

  const messageLengthClass =
    message.length > Constants.FORMS_MESSAGE_MAX_LENGTH ||
    message.length < Constants.FORMS_MESSAGE_MIN_LENGTH
      ? "with-errors"
      : "";

  const submitButtonText = isSuccessful ? "👍 Sent" : "✈️   Send";
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                defaultValue={name}
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <div className="help-block with-errors">
                {errors.name && <span>Please enter your name.</span>}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                defaultValue={email}
                type="email"
                placeholder="Email"
                className="form-control"
                {...register("email", {
                  required: true,
                })}
              />
              <div className="help-block with-errors">
                {errors.email && <span>Please enter your email.</span>}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder={messagePlaceholder}
                rows={5}
                {...register("message", {
                  required: true,
                  onChange: (event) => setMessage(event.target.value),
                  minLength: {
                    value: Constants.FORMS_MESSAGE_MIN_LENGTH,
                    message: `Your message must be at least ${Constants.FORMS_MESSAGE_MIN_LENGTH} characters long!`,
                  },
                  maxLength: {
                    value: Constants.FORMS_MESSAGE_MAX_LENGTH,
                    message: `Your message can only be a maximum of ${Constants.FORMS_MESSAGE_MAX_LENGTH} characters!`,
                  },
                })}
              ></textarea>
              <div className="help-block">
                <span className={messageLengthClass}>{message.length}</span> /{" "}
                {Constants.FORMS_MESSAGE_MAX_LENGTH}
              </div>
              <div className="help-block with-errors my-3 text-danger">
                {errors.message && errors.message.type === "required" && (
                  <span>Please write your message.</span>
                )}
              </div>
              <div className="help-block with-errors my-3 text-danger">
                {errors.message && (
                  <span>{errors.message.message?.toString()}</span>
                )}
              </div>
            </div>
            <div className="text-center">
              <input
                className="btn btn-primary mb-5"
                type="submit"
                value={submitButtonText}
                disabled={isSuccessful}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
