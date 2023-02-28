import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  colorChangedAction,
  statusChangedAction,
} from "../redux/filter-state/actionCreators";

const remainingTodosFormate = (noOfLeftTodos) => {
  switch (noOfLeftTodos) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";
    default:
      return `${noOfLeftTodos} Tasks`;
  }
};

const Footer = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosReducer);
  const filterState = useSelector((state) => state.filterReducer);

  const leftTodos = todosState.filter((todo) => !todo.complete).length;

  const filterStatusChangedHandler = (status) => {
    dispatch(statusChangedAction(status));
  };
  const filterColorStatusChangedHandler = (color) => {
    console.log(!filterState.colorsSelected.includes(color));
    if (!filterState.colorsSelected.includes(color)) {
      dispatch(colorChangedAction(color, "colorAdd"));
    } else {
      dispatch(colorChangedAction(color, "colorRemove"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{remainingTodosFormate(leftTodos)} Left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filterState.status === "all" && "font-bold"
          }`}
          onClick={() => {
            filterStatusChangedHandler("all");
          }}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filterState.status === "incomplete" && "font-bold"
          }`}
          onClick={() => {
            filterStatusChangedHandler("incomplete");
          }}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filterState.status === "complete" && "font-bold"
          }`}
          onClick={() => {
            filterStatusChangedHandler("complete");
          }}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filterState.colorsSelected.includes("green") && "bg-green-500"
          }`}
          onClick={() => filterColorStatusChangedHandler("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filterState.colorsSelected.includes("red") && "bg-red-500"
          }`}
          onClick={() => filterColorStatusChangedHandler("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filterState.colorsSelected.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => filterColorStatusChangedHandler("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
