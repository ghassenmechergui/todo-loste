import "../mystyle/Profil.css";
import { useState, useContext } from "react";
import { todosContext } from "../context/todoContext";
import Delete from "./Delete";
import Todo from "./Todo";
import Update from "./Update";
export default function Profil() {
  const [input, setInput] = useState("");
  if (JSON.parse(localStorage.getItem("todo")) == undefined) {
    localStorage.setItem(
      "todo",
      JSON.stringify([{ title: "", plus: "", isFund: false, id: 1 }])
    );
  }
  const { todos, settodos } = useContext(todosContext);

  const [active, setactive] = useState({
    b1: "active",
    b2: "",
    b3: "",
  });

  const [style, setstyle] = useState({
    display: "none",
  });
  const [style2, setstyle2] = useState({
    display: "none",
  });

  const [todo, setTodo] = useState("");
  function annuler() {
    setstyle({
      display: "none",
    });
    setstyle2({
      display: "none",
    });
  }
  function openModalDlete(todo) {
    setTodo(todo);
    setstyle({
      display: "flex",
    });
  }
  function openModalUpdate(todo) {
    setTodo(todo);
    setstyle2({
      display: "flex",
    });
  }
  function addTodo() {
    let newtodo = todos;
    newtodo.unshift({
      title: input,
      id: todos[0].id + 1 || 1,
      plus: "",
    });
    localStorage.setItem("todo", JSON.stringify(newtodo));
    settodos(newtodo);
    setInput("");
  }
  function deleteTodo() {
    let newtodo = JSON.parse(localStorage.getItem("todo")).filter((e) => {
      if (e.id == todo.id) {
        return;
      } else {
        return e;
      }
    });
    localStorage.setItem(
      "todo",
      newtodo != []
        ? JSON.stringify(newtodo)
        : JSON.stringify([{ title: "", plus: "", isFund: "yes", id: 1 }])
    );
    settodos(newtodo);
    choitsirTodo(
      active.b1 == "active" ? "tout" : active.b2 == "active" ? true : false
    );
    setstyle({
      display: "none",
    });
  }
  function choitsirTodo(choit) {
    let newtodo = JSON.parse(localStorage.getItem("todo")).filter((e) => {
      console.log("rirender");
      if (choit == "tout") {
        setactive({
          b1: "active",
          b2: "",
          b3: "",
        });
        return e;
      }
      if (choit == false) {
        setactive({
          b1: "",
          b2: "",
          b3: "active",
        });
        if (e.isFund == undefined || e.isFund == false) {
          setactive({
            b1: "",
            b2: "",
            b3: "active",
          });
          return e;
        }
      }
      if (choit == true) {
        setactive({
          b1: "",
          b2: "active",
          b3: "",
        });
        if (e.isFund == true) {
          setactive({
            b1: "",
            b2: "active",
            b3: "",
          });
          return e;
        } else {
          return;
        }
      }
    });

    settodos(newtodo);
  }
  return (
    <div className="card">
      <div className="header">todo</div>
      <hr />
      <div className="menu">
        <button
          className={`menuButton ${active.b1}`}
          onClick={() => {
            choitsirTodo("tout");
          }}
        >
          tout
        </button>
        <button
          className={`menuButton ${active.b2}`}
          onClick={() => {
            choitsirTodo(true);
          }}
        >
          fund
        </button>
        <button
          className={`menuButton ${active.b3}`}
          onClick={() => {
            choitsirTodo(false);
          }}
        >
          not fund
        </button>
      </div>
      <div className="section">
        {todos.map((e) => {
          return e.title != "" ? (
            <Todo
              key={e.id || 100}
              todo={e}
              choitsirTodo={choitsirTodo}
              active={active}
              openModalDlete={openModalDlete}
              openModalUpdate={openModalUpdate}
            />
          ) : (
            ""
          );
        })}
      </div>
      <div className="footer">
        <button onClick={addTodo} className=" buttonFooter">
          {" "}
          add todo
        </button>
        <input
          type="text"
          placeholder="add new todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <Delete
        style={style}
        deleteTodo={deleteTodo}
        annuler={annuler}
        toto={todo}
      />
      <Update
        style={style2}
        annuler={annuler}
        todo={todo}
        choitsirTodo={choitsirTodo}
        active={active}
      />
    </div>
  );
}
