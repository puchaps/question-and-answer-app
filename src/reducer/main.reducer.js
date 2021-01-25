import { TOGGELE_INFO } from "./types/main.types";

import { changeToggleChoosedItem } from "./utils/main.utils";

const mainReducer = (state, action) => {
  switch(action.type) {
    case TOGGELE_INFO:
      return {
        ...state,
        questionsAndAnswer: changeToggleChoosedItem(state.questionsAndAnswer, action.payload)
      }
    default:
      return state
  };
};

export default mainReducer;