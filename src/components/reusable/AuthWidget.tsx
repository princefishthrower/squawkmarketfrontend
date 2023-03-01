import * as React from "react";
import { Link } from "gatsby";
import { logout } from "../../utils/logout";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export function AuthWidget() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // not logged in
  if (!isLoggedIn) {
    return (
      <li className="ms-none ms-lg-auto mt-1 nav-item">
        <Link to="/login" className=" btn btn-success">
          Login
        </Link>
      </li>
    );
  }

  // they are logged in
  return (
    <>
      <li className={"ms-3 ms-lg-auto me-3 nav-item"}>
        <a href={process.env.GATSBY_STRIPE_CUSTOMER_PORTAL_URL} className="fs-5 nav-link">
          Manage Subscription
        </a>
      </li>
      <div>
      <button onClick={() => logout(dispatch)} className="btn btn-danger">
        Logout
      </button>
      </div>
    </>
  );
}
