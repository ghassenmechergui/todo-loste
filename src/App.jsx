import "./App.css";
import Profil from "./muComponet/profil";
import { todosContext } from "./context/todoContext";
import { useState } from "react";

import OpenProvider from "./context/snakeBarcontext";

function App() {
  const [todos, settodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || [
      { title: "", plus: "", isFund: "yes", id: 1 },
    ]
  );
  return (
    <>
      <OpenProvider>
        <todosContext.Provider value={{ todos, settodos }}>
          <Profil />
        </todosContext.Provider>
      </OpenProvider>
    </>
  );
}

export default App;
