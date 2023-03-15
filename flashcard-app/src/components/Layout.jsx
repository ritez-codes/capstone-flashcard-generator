import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateFlashCard from '../pages/CreateFlashCard'
import FlashCardDetails, { DetailCard } from '../pages/FlashCardDetails'
// import FlashCardDetails from '../pages/FlashCardDetails'
import MyFlashCard from '../pages/MyFlashCard'
function Layout() {
     return (
          <div className='layout'>
               <Routes>
                    <Route path='/' element={<CreateFlashCard />} />
                    <Route path='/flashcard' element={<MyFlashCard />} />
                    <Route path='/flashcard/detail/:id' element={<FlashCardDetails />}>
                         {/* nested route for each card  */}
                         <Route index path={`/flashcard/detail/:id/:index`} element={<DetailCard />} />
                    </Route>
                    <Route path='*' element={<h1>Error: 404 Not Found</h1>} />
               </Routes>
          </div>
     )
}

export default Layout
