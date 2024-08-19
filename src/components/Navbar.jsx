import React from 'react'
import taskyLogo from '../assets/taskylogo.png'

const Navbar = () => {
  return (
    <div className="flex justify-center mt-3">
    <nav className='flex justify-between text-black bg-blue-300 font-semibold items-center py-2 w-1/2 rounded-lg'>
        <div className="logo w-20 bg-blue-300 ">
        <img src={taskyLogo} alt="Tasky Logo" className='ml-4 bg-blue-300 ' />
        </div>
     <ul className="flex gap-8 mx-9 bg-blue-300 ">
        <li className='cursor-pointer hover:font-bold transition-all bg-blue-300 '>Home</li>
        <a href="https://github.com/Abdus-Samee-007/Tasky">
        <li className='cursor-pointer hover:font-bold transition-all bg-blue-300 '>Github</li></a>
     </ul>
    </nav>
    </div>
  )
}

export default Navbar
