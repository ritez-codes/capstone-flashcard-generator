import { combineReducers } from "redux";
import { flashCard } from "./flashcardReducer";

const rootReducer = combineReducers({
  flashCard,
});

export default rootReducer;
