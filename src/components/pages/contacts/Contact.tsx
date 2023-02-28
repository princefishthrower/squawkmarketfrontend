import React from 'react'
import { Form } from './Form'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { postContactForm } from '../../../utils/postContactForm'
import { FieldValues } from 'react-hook-form'
import { useAppDispatch } from '../../../hooks/useAppDispatch'

const Contact = () => {
  const { isContactSuccessful } = useAppSelector((state) => state.forms)
  const dispatch = useAppDispatch()

  return (
    <div className="container my-5">
      <h1
        className="text-center"
        // id needed for link routing
        id="contact"
      >
        Contact
      </h1>
      <p className="text-center my-3">
        Don't hesitate to contact us 24/7 with questions, concerns, or ideas to make {process.env.GATSBY_PRODUCT_NAME} better.
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <Form
            name={""}
            email={""}
            messagePlaceholder="Questions, comments, critiques..."
            onSubmitForm={(data: FieldValues) => postContactForm(data, dispatch)}
            isSuccessful={isContactSuccessful}
          />
          <div className="d-flex flex-row justify-content-center align-items-center">
            <p className="my-3">
            Or email us at: <a className="text-dark" href="mailto:hi@fullstackcraft.com">
                hi@fullstackcraft.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
