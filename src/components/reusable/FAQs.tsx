import { Link } from 'gatsby'
import * as React from 'react'

export interface IFAQsProps {
  isMainPage: boolean
}

export function FAQs(props: IFAQsProps) {
  const { isMainPage } = props
  return (
    <div className="container my-5">
      {isMainPage ? <h1 className="text-center">FAQs</h1> : <h2>FAQs</h2>}
      <p className="fs-5 my-3">
        Everything you need to know about our subscription plans at Squawk Market. Can't find the answer you're looking
        for? <Link to="/contact">Please contact us</Link>.
      </p>
      <div className="row my-3">
        <div className="col-12 col-lg-4">
          <b className="fs-5">Is there a free trial available?</b>
          <p className="fs-5 my-3">
            Yes, you can try Squawk Market completely free for 7 days.{' '}
            <Link to="/contact">Simply click the 'subscribe' button to claim your free trial</Link>. During your trial you'll have the same access that any premium subscriber has.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-5">Can I change my plan?</b>
          <p className="fs-5 my-3">
            Yes! You can downgrade from premium at any time and we'll just prorate the difference.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-5">What is the cancellation policy?</b>
          <p className="fs-5 my-3">
            You can cancel at any time. You can cancel your subscription with one-click inside your account details.
          </p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12 col-lg-4">
          <b className="fs-5">What is your refund policy?</b>
          <p className="fs-5 my-3">
            If you cancel, your subscription will remain active for the remainder of your paid billing period.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-5">Do I need to download anything?</b>
          <p className="fs-5 my-3">
            No, Squawk Market is a web-based platform that runs completely in the cloud which means you never
            have to download any local desktop software.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-5">Is Squawk Market a broker?</b>
          <p className="fs-5 my-3">No, we are purely a low-latency market squawk provider.</p>
        </div>
      </div>
    </div>
  )
}
