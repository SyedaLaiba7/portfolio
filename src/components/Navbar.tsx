import React from 'react';
import { AiOutlineMenu  , AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
const [isMenuOPen , setIsMenuOpen] = useState(false)

const toggleMenu =() =>{
  setIsMenuOpen(!isMenuOPen)
}
  return (
    <div className="w-full h-[80px]  flex justify-center items-center border-b-2 bg-[#B5BF65]">
            <div className="w-[80%] h-full  flex justify-between items-center">
<div className='text-3xl font-serif text-[#1F260F]'><h1>Syeda</h1></div>
        
      <ul className='gap-10 lg:gap-16 hidden md:flex text-[#1F260F] text-1xl'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#skills'>Skills</a></li>     
        <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='md:hidden' onClick={toggleMenu}>
         {isMenuOPen ? <AiOutlineClose size={30} /> : 
         <AiOutlineMenu size={30} />
         }
      </div>
        </div>


        {
          isMenuOPen &&(
            <ul className='flex flex-col gap-4 mt-4 md:hidden'>
              <li className='menuLink'>
                <a href='#hero' onClick={toggleMenu}>Home</a>
              </li>
              <li className='menuLink'>
                <a href='#about' onClick={toggleMenu}>About</a>
              </li>
              <li className='menuLink'>
                <a href='#skills' onClick={toggleMenu}>Skills</a>
              </li>
              <li className='menuLink'>
                <a href='#contact' onClick={toggleMenu}>Contact</a>
              </li>
            </ul>
          )
        }
    </div>
  )
}

export default Navbar
