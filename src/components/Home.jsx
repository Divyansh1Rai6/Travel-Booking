import { Calendar, MapPin, Search, User2, User2Icon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [destinations, setDestinations] = useState('')
  const [date, setDate] = useState('')
  const [travels, setTravels] = useState('')

  const handleSearch = (e) => {
      e.preventDefault();
      console.log({destinations, date, travels})
  } 

  return (

    <div className='relative  min-h-screen bg-cover bg-center' style={{ backgroundImage: "url('./homebg.jpeg')" }}>
      <div className='absolute inset-0 bg-black/40'></div>

      <div className='relative z-10 h-full px-4 py-44 flex flex-col justify-center items-center text-center text-white'>
        <h3 className='text-lg md:text-xl mb-2'>Explore the World's Most Beautiful Destinations</h3>
        <h1 className='text-2xl md:text-4xl font-semibold max-w-2xl'>Create unforgettable memories</h1>
        <Link to='/dest' className='bg-blue-600 text-lg text-white p-2 md:p-4 mt-10 font-semibold rounded-xl hover:bg-blue-700'>Start Your Journey</Link>
      </div>
      <div className='container mx-auto p-4 sm:p-6 w-[95%] sm:w-[80%] -mt-32 relative z-10 bg-white rounded-xl'>
          <form onSubmit={handleSearch} className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <div className='relative'>
                <label className='text-gray-600 text-lg'>Destination</label>
                <div className='flex mt-5 gap-4'> 
                  <MapPin size={32} className=' text-gray-400'/>
                  <input type='text' placeholder='Where to?' value={destinations} onChange={(e) => {setDestinations(e.target.value)}} className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none'></input>
                </div>
              </div>
              <div className='relative'>
                <label className='text-gray-600 text-lg'>Date</label>
                <div className='flex mt-5 gap-4'> 
                  <Calendar size={32} className=' text-gray-400'/>
                  <input type='date' value={date} onChange={(e) => {setDate(e.target.value)}} className='w-full text-gray-400 p-2 border border-gray-300 rounded-lg focus:outline-none'></input>
                </div>
              </div>
              <div className='relative'>
                <label className='text-gray-600 text-lg'>Travelers</label>
                <div className='flex mt-5 gap-4'> 
                  <User2Icon size={32} className=' text-gray-400'/>
                  <select type='text' placeholder='Select' value={travels} onChange={(e) => {setTravels(e.target.value)}} className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none'>
                    <option value="">Select</option>
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5">5+ Travelers</option>
                  </select>
                </div>
              </div>
               <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
          </form>
      </div>
    </div>
     

  )
}

export default Home