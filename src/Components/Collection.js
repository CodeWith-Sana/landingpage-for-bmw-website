import React from 'react'
import Img4 from '../Assets/Img4.png';
import Img5 from '../Assets/Img5.png';
import Img6 from '../Assets/Img6.png';
import Img7 from '../Assets/Img7.png';
import Img8 from '../Assets/Img8.png';
import Img9 from '../Assets/Img9.png';
import Img10 from '../Assets/Img10.png';
import Img11 from '../Assets/Img11.png';
 const Collection = () => {
  return (
    <div><h1 className ='text-[#1B3E80] sm:text-2xl md:text-4xl font-normal font-poppins text-center  '>Bmw Collections</h1>
    <br/>
    <br/>
    <div className='flex flex-row justify-between md:mx-4 md:my-4  sm:justify-between mx-2 '>
        <img src={Img4} alt="Img4" width={300} height={200} className=''/>
        <img src={Img5} alt="Img5" width={300} height={200} className=''/>
        <img src={Img6} alt="Img6" width={300} height={200} className=''/>
    </div>
    <br/>
    <br/>
   
    <div className='flex flex-col sm:flex-row  justify-between mx-2 md:mx-1 md:my-1'>
    <img src={Img7} alt="Img7" width={300} height={200} className=''/>
    <img src={Img8} alt="Img8" width={300} height={200} className=''/>
</div>

    <br/>
    <br/>
    <div className='flex flex-row justify-between  mx-2 my-2 ' >
        <img src={Img9} alt="Img9" width={300} height={200} className=' '/>
        <img src={Img10} alt="Img10" width={300} height={200} className=''/>
        <img src={Img11} alt="Img11" width={300} height={200} className=''/>
    </div>
    </div>
  )
}
export default Collection;