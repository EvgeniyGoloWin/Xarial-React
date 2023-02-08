import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { token, role } from "../../constants/storageKey";

import logo from "../../assets/logo/xarial-icon.svg";

import "./header.css";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = sessionStorage.getItem(token);
  const admin = sessionStorage.getItem(role);
  const logOut = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const singIn = () => {
    navigate("/login");
  };
  const toHome = () => {
    navigate("/");
  };
  const toAdmin = () => {
    navigate("/admin");
  };
  const toEditStatus = () => {
    navigate("/admin/editStatus");
  };
  const toEditForm = () => {
    navigate("/admin/editForm");
  };

  return (
    <header className={"header"}>
      <div className={"header__block"}>
        <img className={"block__logo"} src={logo} alt={"logo"} />
        <p className={"block__home"} onClick={toHome}>
          Xarial CMS
        </p>
      </div>
      <div className={"header__block__links"}>
        {admin && location.pathname !== "/admin" && (
          <button className={"links__link"} onClick={toAdmin}>
            Admin
          </button>
        )}
        {location.pathname === "/admin" && (
          <button className={"links__link"} onClick={toEditStatus}>
            Edit status
          </button>
        )}
        {location.pathname === "/admin" && (
          <button className={"links__link"} onClick={toEditForm}>
            Edit form
          </button>
        )}
        {auth ? (
          <button onClick={logOut} className={"links__button"}>
            Log out
          </button>
        ) : (
          <button onClick={singIn} className={"links__button"}>
            Sing in
          </button>
        )}
      </div>
    </header>
  );
};
