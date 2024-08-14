import React from 'react'
import taskyLogo from '../assets/tasky-logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white items-center py-2'>
        <div className="logo w-20">
        <img src={taskyLogo} alt="Tasky Logo" className='ml-4' />
        </div>
     <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold  transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
     </ul>
    </nav>
  )
}

export default Navbar
