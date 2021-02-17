import TOGGLE_INFO from "../types/main.types";

const toggleInfoAC = (chooseItemId) => ({
  type: TOGGLE_INFO,
  payload: chooseItemId,
});

export default toggleInfoAC;
