import { CREATE_FLASHCARD } from "../action/constant";

const initialState = [];

const flashCard = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FLASHCARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { flashCard };
