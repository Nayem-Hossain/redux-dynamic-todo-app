import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";
import filterInitialState from "./filterInitialState";

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "colorAdd":
          console.log("color added", color);
          return {
            ...state,
            colorsSelected: [...state.colorsSelected, color],
          };
        case "colorRemove":
          console.log("color removed", color);
          return {
            ...state,
            colorsSelected: [
              ...state.colorsSelected.filter(
                (existingColor) => existingColor !== color
              ),
            ],
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default filterReducer;
