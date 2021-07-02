import React from "react";
import { Button } from "../common";
import { useDispatch } from "react-redux";
import ListActions from "../../redux/list.redux";

const BulkActionBar = () => {
  const dispatch = useDispatch();
  const onClickRemoveSelected = () => dispatch(ListActions.removeSelected());
  return (
    <div className="action-bar">
      <p>Bulk Action:</p>
      <div>
        <Button customClass="btn-done-lg" text="Done" />
        <Button
          customClass="btn-remove-lg"
          text="Remove"
          onClick={onClickRemoveSelected}
        />
      </div>
    </div>
  );
};

export default BulkActionBar;
