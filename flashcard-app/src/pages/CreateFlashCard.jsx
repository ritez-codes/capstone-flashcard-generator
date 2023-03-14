import React, { useEffect, useRef, useState } from 'react'
import { IoIosAdd, IoIosAlert } from "react-icons/io";
import CreateCard from '../components/CreateCard';
import { useDispatch, useSelector } from 'react-redux';
import { createFlashCard } from '../action/action';
import { useFormik } from 'formik';
import { flashcardSchema } from '../formik_yup/schema';

function CreateFlashCard() {
     //getting flashcards from redux store
     let flashcards = useSelector(state => state.flashCard);

     // group input ref
     const groupInputRef = useRef();
     useEffect(() => {
          groupInputRef.current.focus();
     }, [])

     // update localstorage everytime, when changes happen in redux store
     useEffect(() => {
          localStorage.setItem("flashcards", JSON.stringify(flashcards));
     }, [flashcards])


     const dispatch = useDispatch();
     // state for card inputs
     const [cardInputs, setCardInputs] = useState([{ term: "", definition: "" }]);

     // function for handling add more term button
     const addMoreInputs = () => {
          setCardInputs(state => [...state, { term: "", definition: "" }])
     }

     // function for deleting a card.
     const handleCardDel = (passedIndex) => {
          const filteredCard = cardInputs.filter((item, index) => {
               return index !== passedIndex;
          })
          setCardInputs(filteredCard);
     }

     // formik initial value.
     const initialValues = {
          group: "",
          description: "",
          term: "",
          definition: ""
     }

     // useformik
     const { handleChange, handleBlur, errors, values, touched, handleSubmit } = useFormik({
          initialValues: initialValues,
          validationSchema: flashcardSchema,
          onSubmit: (values, action) => {
               const flashCard = {
                    // random id generator
                    _id: "id" + Math.random().toString(16).slice(2),
                    group: values.group,
                    description: values.description,
                    cards: cardInputs
               }
               // craeting new flashcard 
               dispatch(createFlashCard(flashCard));
               // clearing all form inputs
               action.resetForm();
               // resetting cardInputs after creating
               setCardInputs([{ term: "", definition: "" }]);
          }
     })

     return (
          <form className='create-container my-10 ' onSubmit={handleSubmit} >
               {/* group input conatiner.... */}
               <div className='head-container bg-white px-3 shadow-lg text-slate-600 py-2 rounded '>
                    <div className="form-group m-4">
                         <label htmlFor="group">Create Group*</label>
                         <br />
                         <input onChange={handleChange} value={values.group} onBlur={handleBlur} autoComplete='off' type="text" className=' font-semibold bg-transparent  mt-2 h-10 w-2/3 md:w-1/3' id='group' name='group' ref={groupInputRef} />
                         {errors.group && touched.group ?
                              <small className=' flex form-error items-center gap-1 text-red-500'> <IoIosAlert size={"19"} /> {errors.group}</small> :
                              null}
                         {/* <input autoComplete='off' type={"button"} className=" h-10 ml-10 cursor-pointer" value="Upload Image" /> */}
                    </div>

                    {/* discription input container */}
                    <div className="form-group m-4">
                         <label htmlFor="description">Add description</label>
                         <br />
                         <textarea onChange={handleChange} value={values.description} onBlur={handleBlur} type="text" className='mt-2 w-full md:w-2/3 h-20 bg-transparent font-semibold ' id='description' name='description' />
                         {errors.description && touched.description ?
                              <small className=' flex items-center text-red-500 gap-1 form-error'><IoIosAlert size={"19"} /> {errors.description}</small> :
                              null}
                    </div>
               </div>
               <br />
               {/* cards creating container */}
               <div className='term-container  bg-white px-3 text-slate-600 py-4 rounded-md' style={values.group.length < 5 ? { pointerEvents: "none", opacity: .5 } : null} >
                    {
                         cardInputs.map((card, index) => {
                              return <CreateCard key={index.toString()} index={index} setCardInputs={setCardInputs} cardInputs={cardInputs} handleCardDel={handleCardDel} values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />
                         })
                    }
                    <div onClick={addMoreInputs} className=' text-blue-700 flex items-center ml-12 mt-3'>
                         <IoIosAdd color='blue' />  Add more</div>
               </div>

               <div className='btn-group flex justify-center items-center my-7'>
                    <button type='submit' className='hover:opacity-80 transition-all create-btn px-12 rounded-md py-2 bg-red-600 text-white font-bold'>Create</button>
               </div>
          </form>
     )
}

export default React.memo(CreateFlashCard)