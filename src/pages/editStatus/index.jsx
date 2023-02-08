import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import EditStatusItem from "./editStatusItem";
import { Button } from "../../components";
import { baseUrl } from "../../constants/api";

import "./editStatus.css";

export const EditStatus = () => {
  const inputRef = useRef(null);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/status`).then((res) => setStatus(res.data));
  }, []);

  const handleClickRemove = (name) => {
    const arr = status.filter((item) => item !== name);
    setStatus(arr);
  };

  const handleClickUpdate = (index, text) => {
    const updateText = status.map((item, i) => {
      if (index === i) {
        return text;
      } else {
        return item;
      }
    });
    setStatus(updateText);
  };

  const handleClickAdd = () => {
    setStatus([...status, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const handleClickSave = async () => {
    const res = await fetch(`${baseUrl}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(status),
    });

    const data = await res.json();
    setStatus(data);
  };

  return (
    <div className={"edit__status"}>
      <div className={"edit__status__add"}>
        <input className={"add__input__status"} ref={inputRef} />
        <Button type={"button"} content={"Add"} onClick={handleClickAdd} />
      </div>
      {status.length &&
        status?.map((item, index) => {
          return (
            <EditStatusItem
              key={item}
              item={item}
              index={index}
              handleClickUpdate={handleClickUpdate}
              handleClickRemove={handleClickRemove}
            />
          );
        })}
      <div className={"edit__status__section__button"}>
        <Button type={"button"} onClick={handleClickSave} content={"Save"} />
      </div>
    </div>
  );
};
