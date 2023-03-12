import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <h1 className="text-xl">Create Flashcard</h1>
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
