import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function FlashCard({ flashcard }) {
     const navigate = useNavigate();
     return (
          <div className='flashcard shadow bg-white pl-5 w-full h-64 rounded-md'>

               {/* 1st section */}
               <div className='flex items-center gap-4'>
                    {/* avatar box */}
                    <div className="avatar w-12 h-12 rounded-full">
                    </div>

                    <div className='flex flex-col justify-between text-black items-start gap-2'>
                         <h3 className='text-lg font-bold capitalize '>{flashcard.group}</h3>
                         <p className='text-sm' >{flashcard.cards.length} {flashcard.cards.length > 1 ? "cards" : "card"}</p>
                    </div>

               </div>

               {/* 2nd section */}
               <div className='overflow-hidden'>
                    <p className='text-sm'>{flashcard.description}</p>
               </div>

               {/* 3rd section */}
               <div className='text-red-600'>
                    <button onClick={() => {
                         navigate(`/flashcard/detail/${flashcard._id}`)
                    }} className='flex items-center justify-start gap-5'>
                         View Cards<BsArrowRight color='red' />
                    </button>
               </div>

          </div>
     )
}

export default React.memo(FlashCard);
