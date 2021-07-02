import React from "react";
import "./styles.scss";
import { DetailForm } from "../common/";

const NewTask = () => {
  return (
    <div className="new-container">
      <p className="title">New Task</p>
      <div>
        <DetailForm isCreate={true} />
      </div>
    </div>
  );
};

export default NewTask;
