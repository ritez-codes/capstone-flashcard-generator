import { CREATE_FLASHCARD, DELETE_FLAHCARD, SET_FLASHCARD } from "./constant";

export const createFlashCard = (payload) => {
  return {
    type: CREATE_FLASHCARD,
    payload: payload,
  };
};

export const deleteFlashCard = (payload) => {
  return {
    type: DELETE_FLAHCARD,
    payload: payload,
  };
};

export const setFlashCard = (payload) => {
  return {
    type: SET_FLASHCARD,
    payload: payload,
  };
};
