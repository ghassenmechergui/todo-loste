import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import "../mystyle/Profil.css";
import Delete from "./Delete";
import { useState, useContext } from "react";

import { todosContext } from "../context/todoContext";

function Todo({ todo, choitsirTodo, active, openModalDlete, openModalUpdate }) {
  const { todos, settodos } = useContext(todosContext);

  function checkTodo(id) {
    let newtodo = JSON.parse(localStorage.getItem("todo")).map((e) => {
      if (e.id == id) {
        return {
          ...e,
          isFund: !e.isFund,
        };
      } else {
        return e;
      }
    });
    localStorage.setItem("todo", JSON.stringify(newtodo));
    settodos(newtodo);
    choitsirTodo(
      active.b1 == "active" ? "tout" : active.b2 == "active" ? true : false
    );
  }
  return (
    <div className="todo">
      <div className="content">
        <h3>{todo.title}</h3>
        <p>{todo.plus}</p>
      </div>
      <div className="icons">
        <CheckIcon
          className="icon"
          style={{
            color: todo.isFund ? "white" : "green",
            background: todo.isFund ? "green" : "white",
          }}
          onClick={() => {
            checkTodo(todo.id);
          }}
        />
        <CreateIcon
          className="icon"
          onClick={() => {
            openModalUpdate(todo);
            checkTodo(todo.id);
          }}
        />
        <DeleteIcon
          className="icon"
          onClick={() => {
            checkTodo(todo.id);
            openModalDlete(todo);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
