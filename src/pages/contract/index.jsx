import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Loader } from "../../components";
import { baseUrl } from "../../constants/api";

import dragAndDrop from "../../assets/icons/drag.png";

import "./contract.css";

export const Contract = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({});
  const [deletedFiles, setDeletedFiles] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(`${baseUrl}/doc/${number}`).then((res) => setProject(res.data));

    axios.get(`${baseUrl}/status`).then((res) => setStatus(res.data));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [number]);

  const onDropHandler = async (e) => {
    e.preventDefault();
    setProject({ ...project, docs: [...e.dataTransfer.files] });
  };
  const changeSelectValue = (e) => {
    setProject({ ...project, status: e.target.value });
  };

  const onChangeFiles = async (e) => {
    setProject({ ...project, docs: [...project.docs, ...e.target.files] });
  };
  const removeUploadedFile = (name) => {
    const arr = project.docs.filter((item) => item !== name);
    setProject({ ...project, docs: arr });
    setDeletedFiles((prev) => [...deletedFiles, name]);
  };
  const removeFile = (file) => {
    const arr = project.docs.filter((item) => item.name !== file.name);
    setProject({ ...project, docs: arr });
  };
  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    await project.docs.forEach((item) => {
      if (typeof item !== "string") formData.append(`${item.name}`, item);
    });
    formData.append(`status`, project.status);

    if (deletedFiles.length !== 0) {
      await fetch(`${baseUrl}/admin/project/${number}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(deletedFiles),
      });
    }
    if (deletedFiles.length === 0) {
      const res = await fetch(`${baseUrl}/admin/project/${number}`, {
        method: "PUT",
        body: formData,
      });
      const updatedProject = await res.json();
      setProject(updatedProject);
    }
  };
  const onClickBackAdmin = () => navigate("/admin");

  return loading ? (
    <Loader />
  ) : (
    <div className={"contract"}>
      <div className="sub__header">
        <button
          className="sub__header__button__back"
          onClick={onClickBackAdmin}
        >
          &#8592; back
        </button>
      </div>
      <form className={"form__contract"} onSubmit={(e) => onHandleSubmit(e)}>
        <label className={"contract__label"}>
          <p>Project number is: {project?.project_number}</p>
        </label>
        <div>
          <select
            className={"contract__select"}
            onChange={(e) => changeSelectValue(e)}
            value={project?.status}
          >
            <option value={project?.status}>{project?.status}</option>
            {status
              ?.filter((status) => status !== project.status)
              .map((item, index) => (
                <option key={`${index}`} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        <div className={"contract__dragNDrop"}>
          <div className={"dragNDrop__area"} onDrop={(e) => onDropHandler(e)}>
            Click or drop files
            <img
              className={"dragNDrop__image"}
              src={dragAndDrop}
              alt="upload file"
            />
            <input
              className={"dragNDrop__inputFile"}
              type="file"
              id="file"
              multiple
              onChange={onChangeFiles}
            />
          </div>
        </div>
        {Object.keys(project).length &&
          Array.from(project?.docs).map((item, index) => {
            return (
              <div className={"contract__files"} key={index}>
                {typeof item === "string" ? (
                  <a
                    className={"file__doc"}
                    href={`https://test-nscu.onrender.com/${item}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    doc {index + 1}
                  </a>
                ) : (
                  <p className={"file__name"}>{item.name}</p>
                )}
                <button
                  className={"file__remove"}
                  type={"button"}
                  onClick={() =>
                    typeof item === "string"
                      ? removeUploadedFile(item)
                      : removeFile(item)
                  }
                >
                  X
                </button>
              </div>
            );
          })}

        <Button type={"submit"} content={"Save"} />

        <div
          className="user__info__table"
          dangerouslySetInnerHTML={{ __html: project?.user_info }}
        />
      </form>
    </div>
  );
};
