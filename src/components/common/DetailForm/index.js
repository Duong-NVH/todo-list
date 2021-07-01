import React, { useState } from "react";
import { Button, Input, TextArea, DatePicker, Select } from "../";
import "./styles.scss";
import clsx from "clsx";
import { formatDate } from "../../../utils";
import { useDispatch } from "react-redux";
import ListActions from "../../../redux/list.redux";
import { validDaysToDue, createKey } from "../../../utils";

const DetailForm = ({ currentTitle, currentDes, currentDue, currentPrior }) => {
  const PRIORITY_OPTIONS = ["Low", "Normal", "High"];
  const [title, setTitle] = useState(currentTitle ? currentTitle : "");
  const [des, setDes] = useState(currentDes ? currentDes : "");
  const [due, setDue] = useState(
    currentDue ? currentDue : formatDate(new Date())
  );
  const [prior, setPrior] = useState(
    currentPrior ? currentPrior : PRIORITY_OPTIONS[1]
  );
  const [err, setErr] = useState({ title: "", due: "" });

  const dispatch = useDispatch();

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeDes = (e) => setDes(e.target.value);

  const onChangeDue = (e) => setDue(formatDate(e.target.value));

  const onChangePrior = (e) => setPrior(e.target.value);

  const onSubmit = () => {
    if (!title.length > 0) {
      setErr({ ...err, title: "This field is required." });
      return;
    }
    if (!validDaysToDue(new Date(due))) {
      setErr({ ...err, due: "Invalid due date." });
      return;
    }
    if (currentTitle) {
      //update
    } else {
      dispatch(ListActions.add({ title, des, due, prior, id: createKey() }));
      setTitle("");
      setDes("");
      setDue(formatDate(new Date()));
      setPrior(PRIORITY_OPTIONS[1]);
      setErr({ title: "", due: "" });
    }
  };

  return (
    <div className="detail-form">
      <div>
        <Input
          customClass="input-outlined"
          placeholder="Add new task..."
          value={title}
          onChange={onChangeTitle}
          errMsg={err.title}
        />
      </div>
      <div>
        <TextArea label="Description" value={des} onChange={onChangeDes} />
      </div>
      <div id="row">
        <div>
          <DatePicker
            label="Due Date"
            value={due}
            onChange={onChangeDue}
            errMsg={err.due}
          />
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
          text={clsx(currentTitle ? "Update" : "Add")}
          customClass="btn-submit"
          onClick={onSubmit}
          type="submit"
        />
      </div>
    </div>
  );
};

export default DetailForm;
