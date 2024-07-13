import { createContext } from "react";
import { useReducer, useContext } from "react";
import reduseTodos from "../redueser/reduesTodo";

const todosContext = createContext({});

export default function TodosProvider({ children }) {
  const [todos, dispach] = useReducer(
    reduseTodos,
    JSON.parse(localStorage.getItem("todo")) || [
      { title: "", plus: "", isFund: "yes", id: 1 },
    ]
  );

  return (
    <todosContext.Provider value={{ todos, dispach }}>
      {children}
    </todosContext.Provider>
  );
}
export const useTodos = () => {
  return useContext(todosContext);
};
