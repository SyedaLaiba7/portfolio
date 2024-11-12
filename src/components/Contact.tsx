import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-6xl font-serif text-[#1F260F] 'data-aos="zoom-in-up">Get in touch</h2>
                <p className=' text-[18px] pt-2 text-xl text-[#4E5927]  font-serif 'data-aos="zoom-in-up">
Drop me a line,give me a call,or send me a massage by submitting the form.
                </p>
                <div className='flex gap-3 items-center font-sans text-[#1F260F] text-xl'data-aos="zoom-in-up">
                    <SiGmail  size={30}/>  syedalaiba5645776@gmail.com
                </div>

                <div className='flex gap-3 items-center font-sans text-[#1F260F] text-xl'data-aos="zoom-in-up">
              <BsTelephoneForwardFill  size={30}/> 03137406422
                </div>
            </div>
           <div className='space-y-8'>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[40px] bg-transparant border border-accent text-[#1F260F]' 
                id='name'/>
            </div>

            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type="text"
                className='h-[40px] bg-transparant border border-accent text-[#1F260F]' 
                id='email'/>
            </div>

            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='massage'>Massage</label>
                <textarea
                className='bg-transparant border border-accent text-[#1F260F]' 
                id='massage' rows={5}>
                </textarea>
            </div>
            <button className='rounded-full w-[180px] h-[50.21px] bg-[#B5BF65] p-3
  text-[#1F260F]  text-[20px] font-bold'data-aos="zoom-in-up">Send</button>
           </div>
        </div>
      
    </div>
  )
}

export default Contact
