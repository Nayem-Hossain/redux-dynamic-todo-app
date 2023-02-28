import {
  ADD,
  DELETE,
  TOGOL,
  COLORSELECT,
  COMPLETEALLTASK,
  CLEARCOMPLETEDTASK,
} from "./actionTypes";
import todosInitialState from "./todosInitialState";

export const nextTodoId = (state) => {
  const maxId = state.reduce(
    (maxId, currentItem) => Math.max(maxId, currentItem.id),
    -1
  );
  return maxId + 1;
};

const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD:
      const nextId = nextTodoId(state);
      return [
        ...state,
        { id: nextId, text: action.payload, complete: false, color: "" },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGOL:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      });

    case COLORSELECT:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color: color,
          };
        } else {
          return todo;
        }
      });

    case COMPLETEALLTASK:
      return state.map((todo) => {
        return {
          ...todo,
          complete: true,
        };
      });
    case CLEARCOMPLETEDTASK:
      return state.filter((todo) => !todo.complete);
    default:
      return state;
  }
};

export default todosReducer;
