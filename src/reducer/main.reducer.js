import TOGGLE_INFO from "./types/main.types";

import changeToggleChooseItem from "./utils/main.utils";

const mainReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_INFO:
      return {
        ...state,
        questionsAndAnswer: changeToggleChooseItem(
          state.questionsAndAnswer,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default mainReducer;
