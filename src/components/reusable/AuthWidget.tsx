import * as React from "react";
import { Link } from "gatsby";
import { logout } from "../../utils/logout";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export function AuthWidget() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!isLoggedIn) {
    return (
      <li className="ms-auto mt-1 nav-item">
        <Link to="/login" className=" btn btn-success">
          Login
        </Link>
      </li>
    );
  }

  return (
    <button
      onClick={() => logout(dispatch)}
      className="ms-auto btn btn-success"
    >
      Logout
    </button>
  );
}
