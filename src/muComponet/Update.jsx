import { useState, useEffect } from "react";

export default function Update({ style, annuler, todo, updateTodo }) {
  const [input1, setinput1] = useState(todo.title || "");
  const [input2, setinput2] = useState(todo.plus || "");

  useEffect(() => {
    setinput1(todo.title || "");
    setinput2(todo.plus || "");
  }, [todo]);

  return (
    <div style={{ zIndex: 999999 }}>
      <div className="modal " style={style}>
        <div className="modalContent update">
          <h3>update tache</h3>
          <div>
            <input
              type="text"
              value={input1}
              onChange={(e) => {
                setinput1(e.target.value);
              }}
            />
            <input
              type="text"
              value={input2}
              placeholder="information"
              onChange={(e) => {
                setinput2(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              updateTodo(input1, input2);
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
