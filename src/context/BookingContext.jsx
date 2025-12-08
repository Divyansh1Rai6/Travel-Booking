
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const BookingContext = createContext();

export const BookingProvider = ({children}) => {
    const [selectedPackage, setSelectedPackage] = useState(null)
    const [showBooking, setShowBooking] = useState(false)

    const navigate = useNavigate();

    const handleBookNow  = (pkg) => {
    setSelectedPackage(pkg)
    setShowBooking(true)
    navigate('/book')
    setTimeout(() => {
      document.getElementById('booking-form'?.scrollIntoView({behaviour : 'smooth'}))
    }, 100);
  };

  const showFormSuccess = () => {
    setShowBooking(false)
    setSelectedPackage(null)
    window.scrollTo({top: 0, behavior: 'smooth'})
  } 



  return (
    <BookingContext.Provider value={{
        selectedPackage, showBooking, handleBookNow, showFormSuccess, setShowBooking,
    }}>{children}</BookingContext.Provider>
  )

}