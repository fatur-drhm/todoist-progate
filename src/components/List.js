import React, { useState } from "react";
import Form from "./Form";
import { BiTrash } from "react-icons/bi";
import { TiEdit } from "react-icons/ti";
import { BsBookmarkCheckFill } from "react-icons/bs";

const List = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "list-row complete" : "list-row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
        <BsBookmarkCheckFill className={todo.isComplete ? "" : "checked"} key={index} />
      </div>
      <div className="icons">
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
        <BiTrash onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  ));
};

export default List;
