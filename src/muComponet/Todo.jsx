import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import "../mystyle/Profil.css";

import { useOpen } from "../context/snakeBarcontext";
import { useTodos } from "../context/todoContext";

function Todo({ todo, choitsirTodo, active, openModalDlete, openModalUpdate }) {
  const { todos, dispach } = useTodos();
  const { showAlerte } = useOpen();

  function checkTodo(id) {
    dispach({ type: " checked ", payloud: { id: id } });
    choitsirTodo(
      active.b1 == "active" ? "tout" : active.b2 == "active" ? true : false
    );
    showAlerte("change todo succes");
  }
  return (
    <div className="todo">
      <div className="content">
        <h3>{todo.title}</h3>
        <p>{todo.plus}</p>
      </div>
      <div className="icons">
        <CheckIcon
          className="icon"
          style={{
            color: todo.isFund ? "white" : "green",
            background: todo.isFund ? "green" : "white",
          }}
          onClick={() => {
            checkTodo(todo.id);
          }}
        />
        <CreateIcon
          className="icon"
          onClick={() => {
            openModalUpdate(todo);
          }}
        />
        <DeleteIcon
          className="icon"
          onClick={() => {
            openModalDlete(todo);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
