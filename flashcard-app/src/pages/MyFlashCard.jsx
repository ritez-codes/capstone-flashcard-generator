import React from 'react'
import { useSelector } from 'react-redux'
import FlashCard from '../components/FlashCard';

function MyFlashCard() {
     const flashCards = useSelector(state => state.flashCard);
     // console.log(flashCards);

     return (
          <div className='flashcards my-10'>
               {
                    flashCards.map((flashcard, index) => {
                         return <FlashCard flashcard={flashcard} />
                    })
               }
          </div>
     )
}

export default MyFlashCard
