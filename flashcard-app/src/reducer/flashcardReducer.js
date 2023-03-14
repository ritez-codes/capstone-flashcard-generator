import { CREATE_FLASHCARD, SET_FLASHCARD } from "../action/constant";

const initialState = [];

const flashCard = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FLASHCARD:
      return [...state, action.payload];
    case SET_FLASHCARD:
      return [...action.payload];
    default:
      return state;
  }
};

export { flashCard };
