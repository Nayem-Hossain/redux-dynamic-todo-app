import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

export const statusChangedAction = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
export const colorChangedAction = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color: color,
      changeType: changeType, // wether togol color or change color
    },
  };
};
