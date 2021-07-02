import React, { useState } from "react";
import { Button, DetailForm } from "../common";
import { useDispatch } from "react-redux";
import ListActions from "../../redux/list.redux";

const ListItem = ({ data }) => {
  const { title, des, due, prior, state, id } = data;
  const [isDetail, setIsDetail] = useState(false);
  const dispatch = useDispatch();
  const onClickDetail = () => setIsDetail(!isDetail);
  const onClickRemove = () => dispatch(ListActions.remove(id));
  const onChangeCheck = () =>
    dispatch(ListActions.update({ ...data, state: state === 1 ? 0 : 1 }));

  return (
    <div className="list-item">
      <div>
        <div>
          <input
            type="checkbox"
            value={Boolean(state === 0)}
            onChange={onChangeCheck}
          />
          <span>{title}</span>
        </div>
        <div>
          <Button
            customClass="btn-detail-sm"
            text="Detail"
            onClick={onClickDetail}
          />
          <Button
            customClass="btn-remove-sm"
            text="Remove"
            onClick={onClickRemove}
          />
        </div>
      </div>
      {isDetail && (
        <div>
          <DetailForm
            currentTitle={title}
            currentDes={des}
            currentDue={due}
            currentPrior={prior}
            currentId={id}
            currentState={state}
            onChangeVisibility={onClickDetail}
          />
        </div>
      )}
    </div>
  );
};

export default ListItem;
