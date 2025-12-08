
import React, { useContext } from 'react'
import { useState } from 'react'
import { BookingContext } from '../context/BookingContext'


const Destination = () => {
  const { handleBookNow } = useContext(BookingContext)
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectBudget, setSelectBudget] = useState('all')
  const [showBooking, setShowBooking] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'africa', label: 'Africa' },
    { value: 'caribbean', label: 'Caribbean' },
    { value: 'america', label: 'America' },
  ];

  const budgets = [
    { value: 'all', label: 'All' },
    { value: 'budget', label: 'Budegts (< $1000)' },
    { value: 'moderate', label: 'Moderate ($1000 - $2500)' },
    { value: 'luxury', label: 'Luxury ($2500+)' },
  ];

  const packages = [
    {
      id: 1,
      title: 'Bali Paradise',
      region: 'asia',
      image: './Thai.jpeg',
      price: 1299,
      duration: '7 Days / 6 Nights',
      description: 'Experience the tropical paradise with pristine beaches and lush rice terraces',
      budget: 'moderate',
    },

    {
      id: 2,
      title: 'Swiss Alps Adventure',
      region: 'europe',
      image: './Swiss.jpeg',
      price: '2899',
      duration: '10 Days / 9 Nights',
      description: 'Explore breathtaking mountain landscapes and charming alpine villages',
      budget: 'luxury',
    },

    {
      id: 3,
      title: 'Paris Romance',
      region: 'europe',
      image: './Paris.jpeg',
      price: '1899',
      duration: '5 Days / 4 Nights',
      description: 'Discover the city of love with iconic landmarks and world-class cuisine',
      budget: 'moderate',
    },

    {
      id: 4,
      title: 'Tokyo Cultural Tour',
      region: 'asia',
      image: './Tokyo.jpeg',
      price: '2199',
      duration: '8 Days / 7 Nights',
      description: 'Immerse yourself in ancient temples and modern Japanese culture',
      budget: 'moderate',
    },

    {
      id: 5,
      title: 'African Safari',
      region: 'africa',
      image: './African.jpeg',
      price: '3499',
      duration: '12 Days / 11 Nights',
      description: 'Witness magnificent wildife in thier natural habitat on an unforgettable safari',
      budget: 'Luxury',
    },

    {
      id: 6,
      title: 'Caribbean Escape',
      region: 'caribbean',
      image: './Carib.jpeg',
      price: '1599',
      duration: '6 Days / 5 Nights',
      description: 'Relax on white sand beaches with crystal clear turquoise waters',
      budget: 'moderate',
    },

    {
      id: 7,
      title: 'Iceland Northern Lights',
      region: 'europe',
      image: './Ice.jpeg',
      price: '2599',
      duration: '9 Days / 8 Nights',
      description: 'Chase the aurora borealis and explore stunning glaciers and geothermal wonders',
      budget: 'luxury',
    },

    {
      id: 8,
      title: 'Thailand Beach Gateway',
      region: 'asia',
      image: './Thai.jpeg',
      price: '899',
      duration: '5 Days / 4 Nights',
      description: 'Affordable tropical escape with stunning beaches and vibrant nightlife',
      budget: 'budget',
    },

  ];
  const filterPackages = packages.filter((pkg) => {
    const regionMatch = selectedRegion === 'all' || pkg.region === selectedRegion
    const budgetMatch = selectBudget === 'all' || pkg.budget === selectBudget
    return regionMatch && budgetMatch
  })
  return (

    <div className='container mx-auto p-6'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl'>Popular Destinations</h1>
        <p className='text-gray-500'>Discover amazing places around the world</p>
        <div className='flex flex-col md:flex-row mt-5 gap-7'>
          <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className='p-3 flex-1 border border-gray-400 rounded-xl focus:outline-none'>
            {regions.map((region) => (
              <option value={region.value} key={region.value}>
                {region.label}
              </option>
            ))}
          </select>
          <select value={selectBudget} onChange={(e) => setSelectBudget(e.target.value)} className='flex-1 border border-gray-400 rounded-xl p-3 focus:outline-none'>
            {budgets.map((budget) => (
              <option value={budget.value} key={budget.value}>
                {budget.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {filterPackages.length > 0 ? (
          filterPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} onBookNow={handleBookNow} />
          ))
        ) : (
          <div className='col-span-full text-center py-12'>
            <p className='text-gray-500'>No packages found matching your filters.Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Destination

const PackageCard = ({ package: pkg, onBookNow }) => {
  return (
    <div className='m-4 border p-2 rounded-xl shadow group'>
      <img src={pkg.image} className='w-full h-40 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300'></img>
      <h2 className='text-lg font-semibold mt-3'>{pkg.title}</h2>
      <p className='text-gray-600 text-sm'>{pkg.description}</p>
      <p className='text-sm mt-2'>Duration: {pkg.duration}</p>
      <p className='font-bold mt-1'>$ {pkg.price}</p>
      <button onClick={() => onBookNow(pkg)} className='w-full bg-blue-600 text-white py-2 rounded-lg mt-3'>
        Book Now
      </button>
    </div>
  )
}