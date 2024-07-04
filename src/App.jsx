import "./App.css";
import Profil from "./muComponet/profil";
import { todosContext } from "./context/todoContext";
import { useState } from "react";
import Snakbar from "./muComponet/SnakeBar";
import { Open } from "./context/snakeBarcontext";

function App() {
  const [todos, settodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || [
      { title: "", plus: "", isFund: "yes", id: 1 },
    ]
  );
  const [open, setOpen] = useState(false);
  const [contentAlert, setContentAlert] = useState("");
  function showAlerte(text) {
    setContentAlert(text);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  return (
    <>
      <todosContext.Provider value={{ todos, settodos }}>
        <Open.Provider value={{ showAlerte }}>
          <Profil />
        </Open.Provider>
      </todosContext.Provider>
      <Snakbar open={open} contentAlert={contentAlert} />
    </>
  );
}

export default App;
