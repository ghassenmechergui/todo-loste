import { useState, useContext } from "react";
import { todosContext } from "../context/todoContext";
export default function Update({ style, annuler, todo, active, choitsirTodo }) {
  const [input1, setinput1] = useState(todo.title);
  const [input2, setinput2] = useState(todo.plus || "");
  const { settodos } = useContext(todosContext);
  console.log(todo.title);
  function updateTodo(id) {
    let newtodo = JSON.parse(localStorage.getItem("todo")).map((e) => {
      if (e.id == id) {
        return { ...e, title: input1, plus: input2 };
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
    <div style={{ zIndex: 999999 }}>
      <div className="modal " style={style}>
        <div className="modalContent update">
          <h3>update tache</h3>
          <div>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => {
                setinput1(e.target.value);
              }}
            />
            <input
              type="text"
              value={todo.plus}
              placeholder="information"
              onChange={(e) => {
                setinput2(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              updateTodo(todo.id);
              annuler();
            }}
          >
            update
          </button>
          <button onClick={annuler}>annuler</button>
        </div>
      </div>
    </div>
  );
}
