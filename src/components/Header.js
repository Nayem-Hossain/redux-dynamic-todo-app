import React, { useState } from "react";
import noteImage from "../img/notes.png";
import doubleTickImage from "../img/double-tick.png";
import plusImage from "../img/plus.png";
import { useDispatch } from "react-redux";
import {
  addAction,
  clearCompletedTaskAction,
  completeAllTaskAction,
} from "../redux/todos-state/actionCreators";

const Header = () => {
  const dispatch = useDispatch();
  let [inputTodoText, setInputTodoText] = useState("");

  const inputTextHandler = (event) => {
    setInputTodoText(event.target.value);
  };

  const addTodoSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addAction(inputTodoText));
    setInputTodoText("");
  };
  const completeAllTaskHandler = () => {
    dispatch(completeAllTaskAction());
  };
  const clearCompletedTaskHandler = () => {
    dispatch(clearCompletedTaskAction());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={addTodoSubmitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          required
          type="text"
          onChange={inputTextHandler}
          value={inputTodoText}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={completeAllTaskHandler}
        >
          <img className="w-4 h-4" src={doubleTickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearCompletedTaskHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
