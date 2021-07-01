import React, { useState } from "react";
import { Button, Input, TextArea, DatePicker, Select } from "../";
import "./styles.scss";
import clsx from "clsx";
import { formatDate } from "../../../utils";

const DetailForm = ({
  currentTitle,
  currentDes,
  currentDue,
  currentPrior,
  onSubmit,
  isCreate,
}) => {
  const PRIORITY_OPTIONS = ["Low", "Normal", "High"];
  const [title, setTitle] = useState(currentTitle ? currentTitle : "");
  const [des, setDes] = useState(currentDes ? currentDes : "");
  const [due, setDue] = useState(
    currentDue ? currentDue : formatDate(new Date())
  );
  const [prior, setPrior] = useState(
    currentPrior ? currentPrior : PRIORITY_OPTIONS[1]
  );

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeDes = (e) => setDes(e.target.value);

  const onChangeDue = (e) => setDue(formatDate(e.target.value));

  const onChangePrior = (e) => setPrior(e.target.value);

  return (
    <div className="detail-form">
      <div>
        <Input
          customClass="input-outlined"
          placeholder="Add new task..."
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <div>
        <TextArea label="Description" value={des} onChange={onChangeDes} />
      </div>
      <div id="row">
        <div>
          <DatePicker label="Due Date" value={due} onChange={onChangeDue} />
        </div>
        <div>
          <Select
            label="Priority"
            options={PRIORITY_OPTIONS}
            value={prior}
            onChange={onChangePrior}
          />
        </div>
      </div>
      <div>
        <Button
          text={clsx(isCreate ? "Add" : "Update")}
          customClass="btn-submit"
          onClick={onSubmit}
          type="submit"
        />
      </div>
    </div>
  );
};

export default DetailForm;
