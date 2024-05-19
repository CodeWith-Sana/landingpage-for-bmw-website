import React from 'react'
import Img3 from '../Assets/Img3.png';
 const Ourcars = () => {
  return (
    <div className='flex justify-between items-center '>
        <h1 className='ml-2  font-semibold text-5xl md:text-7xl  font-poppins'>
            <span className='text-[#1B3E80]'>Our</span><br/>
            <span className='text-black px-12'>Cars</span></h1>
        {/* <h1 className='px-2 py-8 text-black text-5xl font-semibold md:text-7xl  font-poppins '>Cars</h1> */}
        <img src={Img3} alt= "Img3" width={800} height={450}className='  md: px-4  '/>
    </div>
  )
}

export default Ourcars;