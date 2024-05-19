import React from 'react'
import Img2 from '../Assets/Img2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { faCircle } from '@fortawesome/free-solid-svg-icons'
 const Videos = () => {
  return (
    <div>
        <h1 className='text-[#1B3E80] text-5xl md:text-7xl font-normal font-poppins text-center mb-4'>Our Videos</h1>
       
       <div className='relative'><img src ={Img2} alt="Img2" className='py-3 sm:w-full h-auto md:w-full'/>
       <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'> 
       <svg className='sm: w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20'>
            <ellipse cx="50" cy="50" rx="40" ry="30" fill="none" stroke="#D9D9D9" strokeWidth="1" />
        </svg>
        <FontAwesomeIcon icon={faPlay} size="lg" style={{color: "#d9d9d9", position: "absolute", }} /></div>
        </div>
        <div/>
        
        {/* <FontAwesomeIcon icon={faArrowRight} size='sm' style={{color: "#000000",}} />
        <FontAwesomeIcon icon={faArrowLeft}size='sm' style={{color: "#000000",}} />
        <FontAwesomeIcon icon={faCircle} size="xl" style={{color: "#1b3e80",}} />
        <FontAwesomeIcon icon={faCircle} size="xl" style={{color: "#1b3e80",}} /> */}
       
        </div>
        
    
  )
}
export default Videos;