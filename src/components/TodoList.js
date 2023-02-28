import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todosState = useSelector((state) => state.todosReducer);
  // console.log(todosState);
  const filterState = useSelector((state) => state.filterReducer);
  // console.log(filterState);
  const filterByStatus = (todo) => {
    const { status } = filterState;
    switch (status) {
      case "complete":
        return todo.complete;

      case "incomplete":
        return !todo.complete;

      default:
        return todo; //true
    }
  };
  const filterByColors = (todo) => {
    const { colorsSelected } = filterState;
    if (colorsSelected.length > 0) {
      return colorsSelected.includes(todo?.color);
    }
    return todo;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {todosState
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todoItem={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
