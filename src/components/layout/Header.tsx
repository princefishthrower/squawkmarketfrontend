import { Link } from 'gatsby'
import React from 'react'
import { useState } from 'react'
import { Logo } from '../reusable/Logo'
import { AuthWidget } from '../reusable/AuthWidget'

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  const toggleMobileNav = () => {
    setIsCollapsed(!isCollapsed)
  }
  
  return (
    <>
    <header id="header-wrap">
      <nav className="navbar navbar-expand-lg scrolling-navbar mt-2">
        <div className="container">
          <Link to="/" className="me-3 text-decoration-none text-dark">
            <div className="d-flex flex-row align-items-center justify-content-center">
            <Logo size={56}/>
              <span className="ms-3 fw-bold font-monospace">Squawk Market</span>
              <h1 className="fs-2 m-0 p-0 ms-2">{process.env.GATSBY_PRODUCT_NAME}</h1>
            </div>
          </Link>
          <button
            onClick={toggleMobileNav}
            className={isCollapsed ? 'navbar-toggler collapsed' : 'navbar-toggler'}
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="lni lni-menu color-blue"></i>
          </button>
          <div className={isCollapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show'} id="navbarCollapse">
            <ul className="navbar-nav me-auto w-100 justify-content-start text-center text-lg-start flex-wrap mt-3 mt-lg-0">
              <li className={'nav-item'}>
                <Link to="/pricing" className="fs-5 nav-link">
                  Pricing
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link to="/upgrade" className="fs-5 nav-link">
                  Upgrade
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link to="/blog" className="fs-5 nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown me-2">
                <a
                  className="fs-5 nav-link"
                  href="/contact"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact
                </a>
              </li>
              <li className="d-block d-lg-none">
                <AuthWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <hr/>
    </>
  )
}
export default Header
