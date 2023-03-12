import React from "react";
import { MdDeleteOutline, } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const CreateCard = React.memo(({ cardInputs, setCardInputs, index, handleCardDel }) => {

     const handleTermInput = (passedIndex, event) => {
          let TotalCards = [...cardInputs];
          const { definition } = TotalCards[passedIndex]
          TotalCards[passedIndex] = { term: event.target.value, definition };
          setCardInputs(TotalCards);
          // console.log(TotalCards);
     }
     const handleDefinitionInput = (passedIndex, event) => {
          let TotalCards = [...cardInputs];
          const { term } = TotalCards[passedIndex]
          TotalCards[passedIndex] = { definition: event.target.value, term };
          setCardInputs(TotalCards)
          // console.log(cardInputs)
     }

     return <div className='term-form grid my-3 mx-2 h-24 '>

          <div className='text-center'>
               <span className='py-1 px-3 text-white bg-red-500 rounded-full'>
                    {index + 1}
               </span>
          </div>

          <div className="form-group">
               <label htmlFor="term">Enter Term*</label>
               <br />
               <input value={cardInputs[index].term} onChange={(e) => {
                    handleTermInput(index, e)
               }} className='bg-transparent w-full h-10 border-2' type="text" placeholder='enter term' />
          </div>

          <div className="form-group">
               <label htmlFor="definition">Enter Definition*</label>
               <br />
               <textarea value={cardInputs[index].definition} onChange={(event) => {
                    handleDefinitionInput(index, event)
               }} className=' bg-transparent w-full h-3/4 border-2' type="text" placeholder='enter definition' />
          </div>

          {/* select image */}
          {/* <div className="form-group">
               <br />
               <input className='cursor-pointer bg-transparent w-full h-10 border-2' type="button" value={"Select Image"} />
          </div> */}

          <div className='action-btns flex flex-col items-center gap-3 justify-center '>
               <br />
               <div className='del-btn cursor-pointer' onClick={() => {
                    handleCardDel(index);
               }} >
                    <MdDeleteOutline color='blue' size={"25"} />
               </div>

               <div className='edit-btn cursor-pointer'>
                    <TbEdit color='blue' size={"25"} />
               </div>
          </div>
     </div>
}
)

export default CreateCard