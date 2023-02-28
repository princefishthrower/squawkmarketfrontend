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
      <p className="fs-3 my-3">
        Everything you need to know about our subscription plans at Squawk Market. Can't find the answer you're looking
        for? <Link to="/contact">Please contact us</Link>.
      </p>
      <div className="row my-3">
        <div className="col-12 col-lg-4">
          <b className="fs-3">Is there a free trial available?</b>
          <p className="fs-3 my-3">
            Yes, you can try Squawk Market completely free for 30 days.{' '}
            <Link to="/contact">Please contact us to claim your free trial</Link>. During your trial you'll have a chance to the full
            premium feature set so you can setup the best possible trades. Even better, there's no credit card required to sign up.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-3">Can I change my plan?</b>
          <p className="fs-3 my-3">
            Yes! Our plans can scale with you as you get more comfortable with Squawk Market and your trading needs
            change. At any time, you can upgrade or downgrade and we'll just prorate the difference.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-3">What is the cancellation policy?</b>
          <p className="fs-3 my-3">
            You can cancel at any time. You can cancel your subscription with one-click inside your account details.
          </p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12 col-lg-4">
          <b className="fs-3">What is your refund policy?</b>
          <p className="fs-3 my-3">
            If you cancel, your subscription will remain active for the remainder of your paid billing period. Annual plans are refundable
            within 7 calendar days of an automatic renewal billing.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-3">Do I need to download anything?</b>
          <p className="fs-3 my-3">
            No, Squawk Market is a web-based platform that runs completely in the cloud which means you never
            have to download any local desktop software.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <b className="fs-3">Is Squawk Market a broker?</b>
          <p className="fs-3 my-3">No, we are purely a fintech research & analytic software service provider.</p>
        </div>
      </div>
    </div>
  )
}
