import {
  CHANGE_NUM,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
} from "./actionTypes";

const initialState = {
  question_cat: "",
  question_dif: "",
  question_type: "",
  question_num: 10,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NUM:
      return {
        ...state,
        question_num: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_cat: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_diff: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_cat: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
