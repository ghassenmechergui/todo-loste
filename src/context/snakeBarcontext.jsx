import { createContext } from "react";
import { useState, useContext } from "react";
import Snakbar from "../muComponet/SnakeBar";
const Open = createContext("");

export default function OpenProvider({ children }) {
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
    <Open.Provider value={{ showAlerte }} contentAlert={contentAlert}>
      {children}
      <Snakbar open={open} contentAlert={contentAlert} />
    </Open.Provider>
  );
}
export const useOpen = () => {
  return useContext(Open);
};
