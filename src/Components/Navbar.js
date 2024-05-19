import React from 'react'
import Bmwlogo from '../Assets/Bmwlogo.png';
import { Link } from 'react-router-dom';    
 const Navbar = () => {
  return (
    <div>
    <nav className='bg-black flex flex-wrap justify-between items-center py-4 px-6'>
      <Link to='/' className=''>
        <img src={Bmwlogo} alt="Bmwlogo" className='h-14 w-40' />
      </Link>
      <ul className='text-white text-sm font-semibold font-poppins text-right flex-grow'>
        <li className='inline-block mx-2 sm:mx-3 md:mx-4 lg:mx-5'>
          <Link to='/'>Home</Link>
        </li>
        <li className='inline-block mx-2 sm:mx-3 md:mx-4 lg:mx-5'>
          <Link to='/About'>About</Link>
        </li>
        <li className='inline-block mx-2 sm:mx-3 md:mx-4 lg:mx-5'>
          <Link to='/Design'>Design</Link>
        </li>
        <li className='inline-block mx-2 sm:mx-3 md:mx-4 lg:mx-5'>
          <Link to='/Pricing' className='border px-5 py-2 items-center text-[#10439F]'>Pricing</Link>
        </li>
      </ul>
    </nav>
  </div>
  
  )
}
export default Navbar;
