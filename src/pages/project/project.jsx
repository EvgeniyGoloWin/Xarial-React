import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";

import "./project.css";

const Project = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/doc/${number}`).then((res) => setProject(res.data));
    setTimeout(() => setLoading(false), 1500);
  }, [number]);

  const onClickBackHome = () => navigate("/");

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className={"project"}>
          <div className="sub__header">
            <button
              className="sub__header__button__back"
              onClick={onClickBackHome}
            >
              &#8592; back
            </button>
          </div>
          <p className={"project__p"}>
            <b>Your project number is</b> : {project?.project_number}
          </p>
          <p className={"project__p"}>
            <b>Your project status</b> : {project?.status}
          </p>

          <div>
            {project?.docs.map((item, index) => (
              <a
                className={"project__doc"}
                href={`https://test-nscu.onrender.com/${item}`}
                target="_blank"
                rel="noreferrer"
              >
                doc {index + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
