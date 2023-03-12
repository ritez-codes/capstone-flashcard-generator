import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateFlashCard from '../pages/CreateFlashCard'
// import FlashCardDetails from '../pages/FlashCardDetails'
import MyFlashCard from '../pages/MyFlashCard'
function Layout() {
     return (
          <div className='layout'>
               <Routes>
                    <Route path='/' element={<CreateFlashCard />} />
                    <Route path='/flashcard' element={<MyFlashCard />} />
                    <Route path='*' element={<h1>Error</h1>} />
               </Routes>
          </div>
     )
}

export default Layout
