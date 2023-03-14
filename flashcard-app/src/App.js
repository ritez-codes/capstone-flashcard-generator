import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { setFlashCard } from "./action/action";
import { useDispatch } from "react-redux";

function App() {
  //dispatch function...
  const dispatch = useDispatch();

  // getting saved data from local storage
  useEffect(() => {
    let data = localStorage.getItem("flashcards");
    data = JSON.parse(data);
    if (data !== null) {
      // setting all the localstorage's saved flashcards  to redux store
      dispatch(setFlashCard(data));
    }
  }, []);

  return (
    <div className="app-container">
      {/* app title */}
      <h1 className="text-xl font-bold">Create Flashcard</h1>
      {/* navbar  */}
      <Navbar />
      {/* main layout */}
      <Layout />
    </div>
  );
}

export default App;
