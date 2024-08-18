import React from 'react'
import taskyLogo from '../assets/taskylogo.png'

const Navbar = () => {
  return (
    <div className="flex justify-center mt-3">
    <nav className='flex justify-between text-black bg-violet-300 font-semibold items-center py-2 w-1/2 rounded-lg'>
        <div className="logo w-20 bg-violet-300">
        <img src={taskyLogo} alt="Tasky Logo" className='ml-4 bg-violet-300' />
        </div>
     <ul className="flex gap-8 mx-9 bg-violet-300">
        <li className='cursor-pointer hover:font-bold transition-all bg-violet-300'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all bg-violet-300'>Your Tasks</li>
     </ul>
    </nav>
    </div>
  )
}

export default Navbar
