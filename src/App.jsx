import "./App.css";
import Profil from "./muComponet/profil";
import TodosProvider from "./context/todoContext";

import OpenProvider from "./context/snakeBarcontext";

function App() {
  return (
    <>
      <TodosProvider>
        <OpenProvider>
          <Profil />
        </OpenProvider>
      </TodosProvider>
    </>
  );
}

export default App;
