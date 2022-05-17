import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_NUM,
  CHANGE_PLAYER,
  CHANGE_SCORE,
} from "./actionTypes";

const initialState = {
  question_cat: "",
  question_dif: "",
  question_type: "",
  question_num: 3,
  players: 1,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case CHANGE_NUM:
      return {
        ...state,
        question_num: action.payload,
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        players: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
