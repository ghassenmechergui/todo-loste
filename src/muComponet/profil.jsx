import "../mystyle/Profil.css";
import { useState, useEffect } from "react";
import { useTodos } from "../context/todoContext";
import { useOpen } from "../context/snakeBarcontext";
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
  const { todos, dispach } = useTodos();

  const { showAlerte } = useOpen();
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
  const [counter, setcounter] = useState(0);

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
    dispach({ type: "added", payloud: { title: input } });

    setInput("");
    showAlerte("adding succes");
  }
  function deleteTodo() {
    dispach({ type: " deleted ", payloud: { id: todo.id } });

    choitsirTodo(
      active.b1 == "active" ? "tout" : active.b2 == "active" ? true : false
    );
    setstyle({
      display: "none",
    });
    showAlerte("delete succes");
  }

  function updateTodo(input1, input2) {
    dispach({ type: " update ", payloud: { input1, input2, id: todo.id } });

    choitsirTodo(
      active.b1 == "active" ? "tout" : active.b2 == "active" ? true : false
    );
    showAlerte("update succes");
  }

  function choitsirTodo(choit) {
    let newtodo = JSON.parse(localStorage.getItem("todo")).filter((e) => {
      if (choit == "tout") {
        setactive({
          b1: "active",
          b2: "",
          b3: "",
        });
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
        }
      }
    });

    dispach({ type: "choitsirTodo", payloud: { choit } });
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
          maxLength={20}
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
        updateTodo={updateTodo}
      />
    </div>
  );
}

function Counter({ value, setcounter, activeCounter, setActiveCounter }) {
  return (
    <div
      className={activeCounter.b1 == value ? "active-counter" : ""}
      onClick={() => {
        console.log(value);
        setActiveCounter({
          b1: value,
        });
        console.log((value - 1) * 4);
        setcounter((value - 1) * 4);
      }}
    >
      {value}
    </div>
  );
}
