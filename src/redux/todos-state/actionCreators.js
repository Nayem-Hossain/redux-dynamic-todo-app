import {
  ADD,
  DELETE,
  TOGOL,
  COLORSELECT,
  COMPLETEALLTASK,
  CLEARCOMPLETEDTASK,
} from "./actionTypes";

export const addAction = (todoText) => {
  return {
    type: ADD,
    payload: todoText,
  };
};

export const deleteAction = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};

export const togolAction = (todoId) => {
  return {
    type: TOGOL,
    payload: todoId,
  };
};

export const colorSelectAction = (todoId, color) => {
  return {
    type: COLORSELECT,
    payload: {
      //   todoId: todoId,
      //   color: color,

      /* since, the name and property are same so we can write like the below*/
      todoId,
      color,
    },
  };
};

export const completeAllTaskAction = () => {
  return {
    type: COMPLETEALLTASK,
  };
};

export const clearCompletedTaskAction = () => {
  return {
    type: CLEARCOMPLETEDTASK,
  };
};
