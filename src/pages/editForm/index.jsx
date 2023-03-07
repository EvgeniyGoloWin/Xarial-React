import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Button, Loader } from "../../components";
import EditInput from "./editInput/editInput";
import EditInputsRadio from "./editInputRadio/editInputsRadio";
import { baseUrl } from "../../constants/api";

import plus from "../../assets/icons/add.svg";

import "./editFrom.css";
import saveImg from "../../assets/icons/ok.png";

export const EditForm = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/form`).then((res) => setState(res.data));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const formRef = useRef();

  console.log(formRef.current, "ref");
  console.log(state, "state");

  const handleChangeInputInBlock = () => {
    setState((prev) => formRef.current);
  };

  const handleChangeInput = (e, a, b) => {
    e.stopPropagation();
    e.preventDefault();

    const element = {
      ...state.body[a].form[b].element,
      [e.target.name]: e.target.value,
    };

    const formEl = { ...state.body[a].form[b], element };

    const newArr = state.body[a].form.map((form, index) => {
      if (index === b) {
        return formEl;
      } else {
        return form;
      }
    });

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: newArr };
      } else {
        return item;
      }
    });

    formRef.current = { ...state, body: newBody };
  };

  const handleChangeInputTitle = (e, a, b) => {
    e.stopPropagation();
    e.preventDefault();

    const formEl = { ...state.body[a].form[b], title: e.target.value };

    const arr = state.body[a].form.map((item, index) => {
      if (index === b) {
        return formEl;
      } else {
        return item;
      }
    });

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: arr };
      } else {
        return item;
      }
    });
    formRef.current = { ...state, body: newBody };
  };

  const handleChangeSubtitle = (e, a) => {
    e.stopPropagation();
    e.preventDefault();

    const newForm = { ...state.body[a], subtitle: e.target.value };

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return newForm;
      } else {
        return item;
      }
    });

    formRef.current = { ...state, body: newBody };
  };

  const handleInputChangeRadio = (e, a, b, c) => {
    const element = {
      ...state.body[a].form[b].elements[c],
      [e.target.name]: e.target.value,
    };

    const elements = state.body[a].form[b].elements.map((el, index) => {
      if (index === c) {
        return element;
      } else {
        return el;
      }
    });

    const formEl = { ...state.body[a].form[b], elements };

    const newForm = state.body[a].form.map((item, index) => {
      if (index === b) {
        return formEl;
      } else {
        return item;
      }
    });

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: newForm };
      } else {
        return item;
      }
    });

    formRef.current = { ...state, body: newBody };
  };

  const addRadioButton = (a, b) => {
    const el = {
      type: "radio",
      name: "",
      label: "",
      value: "",
    };
    const elements = state.body[a].form[b].elements.concat(el);

    const mewFormEl = { ...state.body[a].form[b], elements };

    const newForm = state.body[a].form.map((item, index) => {
      if (index === b) {
        return mewFormEl;
      } else {
        return item;
      }
    });

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: newForm };
      } else {
        return item;
      }
    });

    setState((prev) => ({ ...prev, body: newBody }));
  };

  const addInputToForm = (a) => {
    const obj = {
      element: {
        title: "",
        type: "text",
        placeholder: "",
      },
    };

    const lastItem = state.body[a].form.pop();

    const addInput = state.body[a].form.concat(obj, lastItem);

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: addInput };
      } else {
        return item;
      }
    });

    setState((prev) => ({ ...prev, body: newBody }));
  };

  const addInputsToForm = (a) => {
    const obj = {
      title: "",
      elements: [
        {
          type: "radio",
          name: "",
          label: "",
          value: "",
        },
      ],
    };

    const lastItem = state.body[a].form.pop();

    const addInputs = state.body[a].form.concat(obj, lastItem);

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: addInputs };
      } else {
        return item;
      }
    });

    setState((prev) => ({ ...prev, body: newBody }));
  };

  const removeInput = (a, b) => {
    const newFrom = state.body[a].form.filter((_, i) => i !== b);

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: newFrom };
      } else {
        return item;
      }
    });

    setState((prev) => ({ ...prev, body: newBody }));
  };

  const removeRadioButton = (a, b, c) => {
    const newElements = state.body[a].form[b].elements.filter(
      (_, i) => i !== c
    );

    const formEl = { ...state.body[a].form[b], elements: newElements };

    const newForm = state.body[a].form.map((_, i) => {
      if (i === b) {
        return formEl;
      } else {
        return _;
      }
    });

    const newBody = state.body.map((item, index) => {
      if (index === a) {
        return { ...item, form: newForm };
      } else {
        return item;
      }
    });

    setState((prev) => ({ ...prev, body: newBody }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${baseUrl}/form`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });

    const data = await res.json();
    setState(data);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return loading ? (
    <Loader />
  ) : (
    <div className={"page"}>
      <form className="edit__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form__group__header">
          <h1>{state?.header?.title}</h1>
        </div>
        {state?.body?.map((data, formIndex) => {
          return (
            <div key={formIndex} className="form__body">
              {data.subtitle !== undefined && (
                <>
                  <h3 className={"subheader"}>{data?.subtitle}</h3>
                  <div className={"add__block"}>
                    <input
                      className={"block__input"}
                      defaultValue={data?.subtitle}
                      onChange={(e) => handleChangeSubtitle(e, formIndex)}
                      name={"subtitle"}
                    />
                    <img
                      className={"save_icon"}
                      src={saveImg}
                      alt={"save"}
                      onClick={handleChangeInputInBlock}
                    />
                  </div>
                </>
              )}
              {data.form.map((item, formItemIndex) => {
                return item.element ? (
                  <EditInput
                    key={`${Math.random() + formIndex + formItemIndex}`}
                    item={item}
                    remove={() => removeInput(formIndex, formItemIndex)}
                    onChangeInput={(e) =>
                      handleChangeInput(e, formIndex, formItemIndex)
                    }
                    save={handleChangeInputInBlock}
                  />
                ) : (
                  <EditInputsRadio
                    key={`${Math.random() + formIndex + formItemIndex}`}
                    item={item}
                    index={formIndex}
                    index1={formItemIndex}
                    addRadioButton={addRadioButton}
                    handleChangeInputTitle={handleChangeInputTitle}
                    handleInputChangeRadio={handleInputChangeRadio}
                    removeRadioButton={removeRadioButton}
                    removeInput={removeInput}
                    save={handleChangeInputInBlock}
                  />
                );
              })}
              <div className={"add__block"}>
                <img
                  src={plus}
                  alt={"plus"}
                  className={"add__block__plus"}
                  onClick={() => addInputToForm(formIndex)}
                />
                <p className={"add__block__p"}>Add input</p>

                <img
                  src={plus}
                  alt={"plus"}
                  className={"add__block__plus"}
                  onClick={() => addInputsToForm(formIndex)}
                />
                <p className={"add__block__p"}>Add input radio</p>
              </div>
            </div>
          );
        })}

        <Button type={"submit"} content={"Save"} />
      </form>
    </div>
  );
};
