export default function reduseTodos(curenteTodos, action) {
  switch (action.type) {
    case "added":
      console.log(curenteTodos);
      let newtodo = curenteTodos;
      newtodo.unshift({
        title: action.payloud.title,
        id: (curenteTodos[0].id || 0) + 1,
        plus: "",
      });
      localStorage.setItem("todo", JSON.stringify(newtodo));
      return newtodo;

    case " deleted ":
      console.log("ghassen");

    default:
      console.log(Error(action.type));
      return curenteTodos;
  }
}
