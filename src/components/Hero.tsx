import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <main className="mt-full mx-full bg-[#EDF2C2]">
         <Navbar />
         <section className='h-[697px] mx-10 flex gap-11 items-center'>
      <div className='flex flex-col max-w-7xl  mt-80 mx-auto h-full justify-between items-center'>
        <div className='w-[429px] h-[343.5px] flrx flex-col'>
        <h1  className='font-serif text-8xl   text-[#1F260F] leading-normal' data-aos="zoom-in-up">Hi I am </h1>
        <h1 className='font-serif text-7xl  text-[#1F260F]  leading-normal' data-aos="zoom-in-up">Syeda Laiba</h1>
        <p className='text-[#4E5927]  font-serif text-xl'data-aos="zoom-in-up">A front-end- developer focused on mordern, responsive web design.</p>
</div>
      </div>
      </section>
    </main>
    
  )
}

export default Hero
