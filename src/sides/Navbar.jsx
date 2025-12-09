import { Plane, Home, Compass, Calendar, X, Menu } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [mobileOpen, setmobileOpen] = useState(false)
  return (
    <header className='fixed top-0 w-full z-50 bg-white border-gray-300'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex items-center gap-2'>
              <div className='bg-blue-600 p-2 rounded-lg'><Plane className='w-6 h-6 text-white' /></div>
              <h1 className='text-xl text-gray-900'>Travel World</h1>
          </div>
          <nav className='hidden md:flex gap-8 items-center'>
              <Link to='/' className='flex items-center text-xl gap-2 text-gray-700 hover:text-blue-600 transition-colors'><Home className='w-5 h-5'/>Home</Link>
              <Link to='/dest' className='flex items-center text-xl gap-2 text-gray-700 hover:text-blue-600 transition-colors'><Compass className='w-5 h-5'/>Destinations</Link>
              <Link to='/book' className='flex items-center text-xl gap-2 text-gray-700 hover:text-blue-600 transition-colors'><Calendar className='w-5 h-5'/>Book Trip</Link>
          </nav>
          <button onClick={() => {setmobileOpen(!mobileOpen)}} className='md:hidden text-gray-700 hover:text-blue-600 transition-colors'>{mobileOpen ? <X className='w-6 h-6'/> : <Menu className='w-6 h-6'/>}</button>
        </div>
        <nav className={`md:hidden flex flex-col gap-5 w-auto border-t backdrop-blur-sm border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <Link to='/' className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'><Home className='w-4 h-4'/>Home</Link>
          <Link to='/dest' className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'><Compass className='w-4 h-4'/>Destinations</Link>
          <Link to='/book' className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'><Calendar className='w-4 h-4'/>Book Trip</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar