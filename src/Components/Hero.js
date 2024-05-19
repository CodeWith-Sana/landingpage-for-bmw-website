import React from 'react'
import Img1 from '../Assets/Img1.png';
 const Hero = () => {
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <h1 className='text-[#1B3E80] text-7xl font-semibold font-poppins text-right mr-64'>BMW</h1>
        <div className='flex justify-center '>
        <img src={Img1} alt="img1" width={800} height={450} className='' />
        <h1 className='text-black text-7xl font-semibold font-poppins mt-2 mx-2'>DESIGN</h1>
        
        </div>
        </div>
  )
}
export default Hero;
