import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_NUM,
  CHANGE_SCORE,
} from "../reducers/actionTypes";

export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});
export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});
export const handleTypeChange = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});
export const handleNumChange = (payload) => ({
  type: CHANGE_NUM,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
