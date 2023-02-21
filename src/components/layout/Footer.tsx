import { Link } from 'gatsby'
import * as React from 'react'
import { Constants } from '../../constants/Constants'
import { Logo } from '../reusable/Logo'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
    <hr className='m-0'/>
    <div className="container">
      <div className="row justify-content-between my-5">
        <div className="col-12 col-lg-5 my-3 my-lg-0">
          <Link className='text-decoration-none text-dark' to="/">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <Logo size={56}/>
              <span className="ms-3 fw-bold font-monospace">Squawk Market</span>
              <h1 className="fs-2 m-0 p-0 ms-2">{process.env.GATSBY_PRODUCT_NAME}</h1>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-7 text-center text-start">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-end">
              <div className="col-12 col-sm-6 col-md-2">
                <div className="fw-bold my-4">Company</div>
                <div className="my-3">
                  <a href="https://fullstackcraft.com">Full Stack Craft</a>
                </div>
                {/* <div className="my-3">
                  <Link to="/about">About Us</Link>
                </div>
                <div className="my-3">
                  <Link to="/sitemap">Sitemap</Link>
                </div> */}
              </div>
              {/* <div className="col-12 col-sm-6 col-md-2">
                <div className="fw-bold my-4">Support</div>
                <div className="my-3">
                  <Link to="/contact">Contact</Link>
                </div>
                <div className="my-3">
                  <Link to="/faqs">Subscription FAQs</Link>
                </div>
              </div> */}
              <div className="col-12 col-sm-6 col-md-2">
                <div className="fw-bold my-4">Socials</div>
                <div className="my-3">
                  <a href="https://twitter.com/wheelscreener" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </div>
                <div className="my-3">
                  <a href={Constants.DISCORD_LINK} target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                </div>
                <div className="my-3">
                  <a href={Constants.MEDIUM_LINK} target="_blank" rel="noopener noreferrer">
                    Medium
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-2">
                <div className="fw-bold my-4">Legal</div>
                {/* <div className="my-3">
                  <Link to="/risk-disclosure">Risk Disclosure</Link>
                </div>
                <div className="my-3">
                  <Link to="/terms-and-conditions">Terms of Use</Link>
                </div> */}
                <div className="my-3">
                  <a href="https://fullstackcraft.com/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between align-items-center my-5">
        <div className="col-12 col-lg-6 col-md-6 text-center text-md-start">
          © {year} 👨‍💻&nbsp;&nbsp;with ❤️&nbsp;&nbsp;by <a href="https://fullstackcraft.com">Full Stack Craft</a>
        </div>
        <div className="col-12 col-lg-6 col-md-6 text-center text-md-end">
          {process.env.GATSBY_PRODUCT_NAME} v1.0.0-{process.env.GATSBY_BRANCH}-{process.env.GATSBY_COMMIT_REF?.slice(0, 7)}{' '}
          {process.env.GATSBY_LAST_BUILD?.split('+')[0].replace('T', ' ')}
        </div>
      </div>
    </div></>
  )
}
export default Footer
