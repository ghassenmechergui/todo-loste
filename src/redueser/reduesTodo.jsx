export default function reduseTodos(curenteTodos, action) {
  switch (action.type) {
    case "added":
      let newtodo = JSON.parse(localStorage.getItem("todo"));
      newtodo.unshift({
        title: action.payloud.title,
        id: (curenteTodos[0].id || 0) + 1,
        plus: "",
      });
      localStorage.setItem("todo", JSON.stringify(newtodo));
      return newtodo;

    case " deleted ":
      let deleted = JSON.parse(localStorage.getItem("todo"));
      let apreDeleted = deleted.filter((e) => {
        if (e.id == action.payloud.id) {
          return;
        } else {
          return e;
        }
      });
      localStorage.setItem(
        "todo",
        apreDeleted != []
          ? JSON.stringify(apreDeleted)
          : JSON.stringify([{ title: "", plus: "", isFund: "yes", id: 1 }])
      );
      return apreDeleted;
    case " update ":
      let update = JSON.parse(localStorage.getItem("todo")).map((e) => {
        if (e.id == action.payloud.id) {
          return {
            ...e,
            title: action.payloud.input1,
            plus: action.payloud.input2,
          };
        } else {
          return e;
        }
      });
      localStorage.setItem("todo", JSON.stringify(update));

      return update;

    case " checked ":
      const checked = curenteTodos.map((e) => {
        if (e.id == action.payloud.id) {
          const updatetodo = {
            ...e,
            isFund: !e.isFund,
          };
          return updatetodo;
        } else {
          return e;
        }
      });
      localStorage.setItem("todo", JSON.stringify(checked));
      return checked;

    case "choitsirTodo":
      return curenteTodos;

    case "red":
      return action.payloud.todos;
    default:
      return curenteTodos;
  }
}
