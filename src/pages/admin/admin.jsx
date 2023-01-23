import React, { useEffect, useState } from "react";
import AdminBlock from "../../components/projectBlock/adminBlock/adminBlock";
import Header from "../../components/header/header";
import { baseUrl } from "../../constants/api";
import axios from "axios";

import "./admin.css";

const Admin = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/docs`).then((res) => setProjects(res.data));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <div className={"admin"}>
        <h1 className={"admin__header"}>Projects</h1>
        {projects?.map((project, index) => {
          return <AdminBlock key={`${index}`} item={project} />;
        })}
      </div>
    </>
  );
};

export default Admin;
