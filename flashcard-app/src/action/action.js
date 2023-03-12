import { CREATE_FLASHCARD, DELETE_FLAHCARD } from "./constant";

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
