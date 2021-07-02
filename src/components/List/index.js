import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Input } from "../common/";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import BulkActionBar from "./BulkActionBar";
import { LOCAL_STORE_KEY } from "../../const";

const List = () => {
  const todoList = useSelector((state) => state.listRedux.list);
  const [display, setDisplay] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [enableActionBar, setEnableActionBar] = useState(false);

  const onChangeSearch = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    let list = todoList
      .sort((a, b) => new Date(a.due) / 1000 - new Date(b.due) / 1000)
      .filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      ); // sort by time to due date then filter by search value
    setDisplay([...list]);
  }, [todoList, searchValue]);

  useEffect(() => {
    // state=0 (checked)=> overallState=0 (0*any) =>enable Action Bar
    if (todoList.length > 0) {
      const overallState = todoList
        ?.map((todo) => todo.state)
        .reduce((accumulator, currentValue) => accumulator * currentValue);
      if (overallState) {
        setEnableActionBar(false);
      } else {
        setEnableActionBar(true);
      }
    } else {
      setEnableActionBar(false);
    }
    //STORE DATA
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="list-container">
      <p className="title">Todo List</p>
      <div>
        <Input
          customClass="input-outlined"
          placeholder="Search..."
          value={searchValue}
          onChange={onChangeSearch}
        />

        <div>
          {display?.map((todo) => (
            <ListItem key={todo.id} data={todo} />
          ))}
        </div>
      </div>
      {enableActionBar && <BulkActionBar />}
    </div>
  );
};

export default List;
