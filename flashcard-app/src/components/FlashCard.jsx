import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function FlashCard({ flashcard }) {
     return (
          <div className='flashcard bg-slate-50 py-4 px-5 h-64 rounded-md'>

               <div className='flex items-center h-6 gap-4'>
                    <div className="avatar w-12 h-12 rounded-full">
                    </div>

                    <div className='my-5 flex flex-col justify-between items-start gap-2'>
                         <h3 className='text-lg'>{flashcard.group}</h3>
                         <p className='text-xs' >{flashcard.cards.length} {flashcard.cards.length > 1 ? "cards" : "card"}</p>
                    </div>

               </div>

               <div className='h-45 mb-5 overflow-hidden'>
                    <p className='text-xs'>{flashcard.description}</p>
               </div>

               <div className='text-red-600'>
                    <button className='flex items-center justify-start gap-5'>
                         View Cards<BsArrowRight color='red' />
                    </button>
               </div>
          </div>
     )
}

export default FlashCard
