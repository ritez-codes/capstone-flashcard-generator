import React, { useRef } from "react";
import { MdDeleteOutline, } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const CreateCard = React.memo(({ cardInputs, setCardInputs, index, handleCardDel }) => {

     const inputTermRef = useRef();

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

     return <div className='term-form grid mb-10 md:my-3 md:border-none border-b p-3 mx-2'>

          <div className='text-center'>
               <span className='py-1 px-3 text-white bg-red-500 rounded-full'>
                    {index + 1}
               </span>
          </div>

          <div className="form-group">
               <label htmlFor="term">Enter Term*</label>
               <br />
               <input minLength={"5"} maxLength="25" required autoComplete="off" ref={inputTermRef} value={cardInputs[index].term} onChange={(e) => {
                    handleTermInput(index, e)
               }} className='bg-transparent w-2/3 md:w-full h-10 ' type="text" placeholder='enter term' />
          </div>

          <div className="form-group">
               <label htmlFor="definition">Enter Definition*</label>
               <br />
               <textarea autoComplete="off" maxLength={"200"} minLength={"10"} required value={cardInputs[index].definition} onChange={(event) => {
                    handleDefinitionInput(index, event)
               }} className=' bg-transparent w-full h-3/4' type="text" placeholder='enter definition' />
          </div>

          {/* select image */}
          {/* <div className="form-group">
               <br />
               <input className='cursor-pointer bg-transparent w-full h-10 ' type="button" value={"Select Image"} />
          </div> */}

          <div className='action-btns flex md:flex-col items-center gap-3 justify-center '>
               <br />
               <button type="button" disabled={cardInputs.length > 1 ? false : true} className='del-btn cursor-pointer' onClick={() => {

                    handleCardDel(index);
               }} >
                    <MdDeleteOutline color='blue' size={"25"} />
               </button>

               <div onClick={() => {
                    inputTermRef.current.focus();
               }} className='edit-btn cursor-pointer'>
                    <TbEdit color='blue' size={"25"} />
               </div>
          </div>
     </div>
}
)

export default CreateCard