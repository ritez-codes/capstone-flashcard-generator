import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import CreateCard from "../components/CreateCard";
import { useDispatch } from "react-redux";
import { createFlashCard } from "../action/action";

function CreateFlashCard() {
  const dispatch = useDispatch();
  // state for card inputs
  const [cardInputs, setCardInputs] = useState([{ term: "", definition: "" }]);
  // state for groupName
  const [groupName, setGroupName] = useState("");
  // state for description
  const [description, setDiscription] = useState("");
  // state for disabling
  const [disable, setDisable] = useState(true);

  // creating onchange function
  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  // function for handling add more term button
  const addMoreInputs = () => {
    setCardInputs((state) => [...state, { term: "", definition: "" }]);
  };

  // logic for disbling card creating container
  useEffect(() => {
    if (groupName.length > 4) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [groupName]);

  // function for deleting a card.
  const handleCardDel = (passedIndex) => {
    const filteredCard = cardInputs.filter((item, index) => {
      return index !== passedIndex;
    });
    setCardInputs(filteredCard);
  };

  //
  const handleCreateFlashCard = () => {
    const flashCard = {
      // random id generator
      _id: "id" + Math.random().toString(16).slice(2),
      group: groupName,
      description: description,
      cards: cardInputs,
    };
    dispatch(createFlashCard(flashCard));
    setCardInputs([{ term: "", definition: "" }]);
    setDiscription("");
    setGroupName("");
  };

  return (
    <form className="create-container my-10 ">
      {/* group input conatiner.... */}
      <div className="head-container bg-slate-50 px-3 shadow-lg text-slate-600 py-2 rounded ">
        <div className="form-group m-4">
          <label htmlFor="group">Create Group*</label>
          <br />
          <input
            autoComplete="off"
            onChange={handleGroupName}
            type="text"
            className=" bg-transparent  mt-2 h-10 w-1/3"
            placeholder="enter group name"
            id="group"
            name="group"
          />

          {/* <input autoComplete='off' type={"button"} className=" h-10 ml-10 cursor-pointer" value="Upload Image" /> */}
        </div>

        {/* discription input container */}
        <div className="form-group m-4">
          <label htmlFor="description">Add description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
            type="text"
            className="mt-2 w-2/3 h-20 bg-transparent "
            id="description"
            name="description"
          />
        </div>
      </div>
      <br />
      {/* cards creating container */}
      <div
        className="term-container  bg-slate-50 px-3 text-slate-600 py-4 rounded-md"
        style={disable ? { pointerEvents: "none", opacity: 0.5 } : {}}
      >
        {cardInputs.map((card, index) => {
          return (
            <CreateCard
              key={index.toString()}
              index={index}
              setCardInputs={setCardInputs}
              cardInputs={cardInputs}
              handleCardDel={handleCardDel}
            />
          );
        })}
        <button
          onClick={addMoreInputs}
          className=" text-blue-700 flex items-center ml-12 mt-3"
        >
          <IoIosAdd color="blue" /> Add more
        </button>
      </div>

      <div className="btn-group flex justify-center items-center my-10">
        <button
          type="submit"
          onClick={handleCreateFlashCard}
          className="create-btn px-12 rounded-md py-2 bg-red-600 text-slate-100"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default React.memo(CreateFlashCard);
