import React from 'react';
import Sec1 from'../asset/Sec1.png'



function  Section1({scrollDown}) {


  return (
    <div className=" grid grid-cols-2 w-full py-10 md:px-5 bg-[#1C1C3A] rounded-b-3xl">
      {/* Left side */}
        <div className='col-span-2 md:col-span-1  flex justify-center items-center'>
          <img src={Sec1} alt="professer" className='w-[90vh]' />
        </div>
      {/* Right side */}
        <div className='col-span-2 md:col-span-1 flex gap-10 justify-center items-center flex-col px-10'>
          <h3 className='font-sans text-white text-[39px] md:text-[10vh] font-semibold text-center tracking-tighter'> Gauge Water Purifier <span className=' bg-clip-text text-transparent bg-gradient-to-tr from-[#D83665] to-[#FD9E64]'>Puts An End</span> To RO Service Pain</h3>
          <h3 className='text-center  text-[15px] md:text-[18px] text-gray-500'>Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.</h3>
          <button onClick={scrollDown} className='px-10  bg-blue-500 hover:bg-blue-700 py-4 rounded-full text-md md:text-xl text-white'>Take a product Tour</button>
          <h3 className='text-center text-[15px] md:text-[18px] text-gray-300'>Experience Convenience Like Never Before With Our Smart Water Purifier</h3>

        </div>
    </div>
  )
}

export default Section1