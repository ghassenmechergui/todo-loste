import "./App.css";
import Profil from "./muComponet/profil";
import { todosContext } from "./context/todoContext";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || [
      { title: "", plus: "", isFund: "yes", id: 1 },
    ]
  );
  return (
    <>
      <todosContext.Provider value={{ todos, settodos }}>
        <Profil />
      </todosContext.Provider>
    </>
  );
}

export default App;
