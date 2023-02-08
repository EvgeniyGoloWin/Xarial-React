import React from "react";
import { useNavigate } from "react-router";

import "./adminBlock.css";
import { Button } from "../../../components";

const AdminBlock = ({ item }) => {
  const navigate = useNavigate();
  const openItem = (name) => navigate(`/admin/contract/${name}`);

  return (
    <div className={"adminBlock"}>
      <p>{item.project_number}</p>
      <p>{item.status}</p>
      <Button onClick={() => openItem(item.project_number)} content={"Edit"} />
    </div>
  );
};

export default AdminBlock;
