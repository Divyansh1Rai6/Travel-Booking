import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './sides/Navbar'
import Footer from './sides/Footer'
import Home from './components/Home'
import Destination from './components/Destination'
import BookTrip from './components/BookTrip'
import './App.css'
import { BookingProvider } from './context/BookingContext'

function App() {

  const router = createBrowserRouter([{
    
    path: '/' ,
    element: (
      <BookingProvider>
      <>
      <Navbar />
      <main className='pt-20'>
        <Outlet />
      </main>
      <Footer />
      </>
      </BookingProvider>
    ),
    children: [
      {index: true, element: <Home />},
      {path: '/dest', element: <Destination />},
      {path: '/book', element: <BookTrip onSuccess={() => console.log("Success")} 
      onCancel={() => navigate(-1)} />},
    ],
  },
])
  return <RouterProvider router={router} />
}

export default App
