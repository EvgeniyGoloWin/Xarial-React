import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import { baseUrl } from "../../constants/api";
import { role, token } from "../../constants/storageKey";

import "./form.css";

export const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === "/login";

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${baseUrl}/user/login`, formState);
    const data = await res.data;

    if (data.token) sessionStorage.setItem(token, data.token);
    if (data.token) sessionStorage.setItem(role, data.role);

    data.role === "user" ? navigate("/") : navigate("/admin");
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    await axios.post(`${baseUrl}/user/register`, formState);
    navigate("/login");
  };

  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const toRegister = () => {
    navigate("/registration");
  };

  return (
    <form
      className={"registration__form"}
      onSubmit={page ? handleSubmitLogin : handleSubmitRegister}
    >
      <div className={"form__block"}>
        <label htmlFor={"email"} className={"form__block__label"}>
          Email address
        </label>
        <input
          id={"email"}
          className={"form__block__input"}
          type="text"
          name={"email"}
          value={formState.email}
          onChange={(event) => handleOnChange(event)}
          required={true}
        />
      </div>
      <div className={"form__block"}>
        <label htmlFor={"password"} className={"form__block__label"}>
          Password
        </label>
        <input
          id={"password"}
          className={"form__block__input"}
          type="password"
          name={"password"}
          value={formState.password}
          onChange={(event) => handleOnChange(event)}
          required={true}
        />
      </div>
      <div className={"registration__form__buttons"}>
        {page && (
          <button
            className={"buttons__forgot"}
            type={"button"}
            onClick={toRegister}
          >
            Registration
          </button>
        )}
        <button className={"buttons_singIn"} type={"submit"}>
          {page ? "Sing in" : "Registration"}
        </button>
      </div>
    </form>
  );
};
