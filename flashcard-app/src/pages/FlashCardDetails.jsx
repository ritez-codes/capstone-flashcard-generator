import React, { Fragment, createContext, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { FaShare } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FiShare2 } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import CopyToClipboard from 'react-copy-to-clipboard';

import {
     Dialog,
     DialogBody,
     DialogFooter,
} from "@material-tailwind/react";

import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';


export const DetailContext = createContext();

function FlashCardDetails() {

     const link = window.location
     // console.log(link)

     const navigate = useNavigate();
     // getting all flash card from redux store....
     const flashcard = useSelector(state => state.flashCard);

     // state for flashcard to show the details
     const [detailingFlashCard, setDetailingFlashCard] = useState();

     // state for copyclipboard
     const [iscopied, setIsCopied] = useState(false);

     // destructuring params passed in route...
     const { id, index } = useParams();

     useEffect(() => {
          const filteredFlashCard = flashcard.find((item, index) => {
               return item._id === id;
          })
          navigate(`/flashcard/detail/${id}/0`)
          setDetailingFlashCard(filteredFlashCard);
     }, [])

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(!open);

     return (
          detailingFlashCard &&
          <DetailContext.Provider value={detailingFlashCard} >
               <Fragment>
                    <div className='detail-page text-slate-600 mt-5'>
                         {/* detail page head section */}
                         <div className='detail-head h-24'>
                              <button onClick={() => {
                                   navigate("/flashcard");
                              }} className='capitalize text-xl flex justify-start items-center gap-3 text-black font-bold' >
                                   <BsArrowLeft />
                                   {detailingFlashCard.group}</button>
                              <p className='text-left my-4'>{detailingFlashCard.description}</p>
                         </div>

                         <div className='detail-main mt-8'>

                              {/* deatil aside section with navlinks */}
                              <aside className='shadow aside-nav rounded-md bg-white p-3 section'>

                                   <h3 className='pl-4 text-slate-500 text-sm font-thin pb-3 border-b-2'>Flashcards</h3>

                                   <div className='detail-navlinks pl-5 gap-6 mt-5 flex flex-col font-semibold justify-start items-start'>
                                        {
                                             detailingFlashCard.cards.map((card, index) => {
                                                  return <NavLink key={index.toString()} className={"font-semibold"} to={`/flashcard/detail/${id}/${index}`} >
                                                       {card.term}
                                                  </NavLink>
                                             })
                                        }
                                   </div>
                              </aside>


                              {/* detailed card section */}
                              <div className=''>
                                   <div className='shadow rounded-md text-md bg-white section h-72'>
                                        <Outlet />
                                   </div>
                                   <div className='paginate mt-8'>
                                        <div className='flex justify-center items-center gap-6'>
                                             <button type='button' onClick={() => {
                                                  if (index > 0) {
                                                       let i = index
                                                       i--;
                                                       navigate(`/flashcard/detail/${id}/${i}`)
                                                  }
                                             }} className='cursor-pointer'>
                                                  <IoIosArrowBack size={"30"} />
                                             </button>

                                             <span className='text-lg'>{Number(index) + 1}/{detailingFlashCard.cards.length}</span>

                                             <button type='button' disabled={detailingFlashCard.cards.length - 1 > index ? false : true} onClick={() => {
                                                  if (index !== detailingFlashCard.cards.length - 1) {
                                                       let i = index;
                                                       i++;
                                                       navigate(`/flashcard/detail/${id}/${i}`);
                                                  }
                                             }} className='cursor-pointer'>
                                                  <IoIosArrowForward size={"30"} />
                                             </button>
                                        </div>
                                   </div>
                              </div>


                              {/* misceleneous aside section*/}
                              <div className='flex justify-center place-items-end items-start'>
                                   <button onClick={handleOpen} variant="gradient" className='shadow flex bg-white px-14 w-1/2 rounded-md md:w-full py-2 justify-start items-center gap-2 '><FaShare />Share</button>
                              </div>
                         </div>
                    </div>

                    <Dialog className='absolute w-full p-4' open={open} handler={handleOpen}>
                         {/* <DialogHeader className='flex items-start justify-end' > */}
                         <span className='cursor-pointer flex items-start text-black justify-end'>
                              <RxCross2 size={"25"} onClick={handleOpen} />
                         </span>
                         {/* </DialogHeader> */}

                         <DialogBody divider className=' text-black border-none'>
                              <h4 className='font-bold'>Share</h4>
                              <div className='input group gap-3 flex flex-col md:flex-row justify-start items-center'>

                                   <input type="text" className='text-start w-full md:h-9 p-2 md:w-2/3 border-dotted mt-3 outline-none' value={`${link}`} />

                                   <span className='copy-btn cursor-pointer' onClick={() => {
                                        setIsCopied(true)
                                   }}>
                                        <CopyToClipboard text={link} >
                                             {iscopied ?
                                                  <HiOutlineClipboardCheck size={"30"} /> : <HiOutlineClipboard size={"30"} />
                                             }
                                        </CopyToClipboard>
                                   </span>

                                   <span>
                                        <FiShare2 size={"30"} />
                                   </span>

                              </div>

                         </DialogBody>

                         <DialogFooter className='dialog flex justify-center gap-10 items-center'>

                              <div >
                                   <FacebookShareButton url={link}>
                                        <FacebookIcon size={"39"} />
                                   </FacebookShareButton>
                              </div>

                              <div >
                                   <LinkedinShareButton url={link}>
                                        <LinkedinIcon size={"39"} />
                                   </LinkedinShareButton>
                              </div>

                              <div >
                                   <WhatsappShareButton url={link}>
                                        <WhatsappIcon size={"39"} />
                                   </WhatsappShareButton>
                              </div>

                              <div >
                                   <TwitterShareButton url={link}>
                                        <TwitterIcon size={"39"} />
                                   </TwitterShareButton>
                              </div>

                              <div >
                                   <EmailShareButton url={link}>
                                        <EmailIcon size={"39"} />
                                   </EmailShareButton>
                              </div>
                         </DialogFooter>
                    </Dialog>
               </Fragment>
          </DetailContext.Provider>
     )
}

export default FlashCardDetails

// DetailCard Component
export const DetailCard = () => {

     // destructuring params 
     const { index } = useParams()

     // getting detailing flashcard from context api
     const flashcard = useContext(DetailContext);

     return <div className='p-10 detailcard '>
          <div>

          </div>
          <div>
               {flashcard.cards[index].definition}
          </div>
     </div>
}