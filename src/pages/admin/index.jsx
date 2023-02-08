import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminBlock from "./adminBlock/adminBlock";
import { baseUrl } from "../../constants/api";

import "./admin.css";

export const Admin = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/docs`).then((res) => setProjects(res.data));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={"admin"}>
      <h1 className={"admin__header"}>Projects</h1>
      {projects?.map((project, index) => {
        return <AdminBlock key={`${index}`} item={project} />;
      })}
    </div>
  );
};
