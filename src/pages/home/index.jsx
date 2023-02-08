import React, { useRef, useState } from "react";
import axios from "axios";

import Block from "./block/block";
import { baseUrl } from "../../constants/api";

import "./home.css";

export const Home = () => {
  const inputRef = useRef(null);
  const [res, setRes] = useState({});

  const handleClick = async () => {
    console.log(inputRef.current.value);
    const res = await axios.post(`${baseUrl}/user/search`, {
      number: inputRef.current.value,
    });
    const data = await res.data;
    setRes(data);
  };

  return (
    <div className={"home"}>
      <div className={"home__block__blue"}>
        <p className={"block__p__white"}>Xarial</p>
        <p className={"block__p__cms"}>CMS</p>
      </div>
      <div className={"home__block__blue"}>
        <p className={"block__p__text"}>Find information about your project</p>
      </div>
      <div className={"home__block__find"}>
        <input className={"find__input"} type="number" ref={inputRef} />
        <button
          className={"find__button"}
          type={"submit"}
          onClick={handleClick}
        >
          Find
        </button>
      </div>
      {Object.keys(res).length === 0 ? null : Object.keys(res).length === 1 ? (
        <p className={"not__find"}>{res?.message}</p>
      ) : (
        <Block item={res} />
      )}
    </div>
  );
};
