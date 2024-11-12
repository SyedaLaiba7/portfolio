import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="w-full h-[80px]  flex justify-center items-center border-b-2  bg-[#B5BF65]">
            <div className="w-[80%] h-full  flex justify-between items-center">
<div className='text-3xl font-serif text-[#1F260F]'><h1>Syeda</h1></div>
        
      <ul className='gap-10 lg:gap-16 hidden md:flex text-[#1F260F] text-1xl'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#skills'>Skills</a></li>
        <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      <AiOutlineMenu className='md:hidden' size={30} /> 
        </div>
    </div>
  )
}

export default Navbar
