import React from 'react'
import { useState } from 'react'
import { X, CheckCircle, User, Mail, Phone, Users, Calendar, MessageSquare, MapPin } from 'lucide-react'
const BookTrip = ({selectedPackage, onSuccess, onCancel}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    date: '',
    message: '',
    destination: '',
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)

    setTimeout(() => {
      onSuccess();
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelers: '1',
        date: '',
        message: '',
        destination: '',
      });
    }, 3000)
  }

  const handleCancel = () => {
  alert("Booking cancelled!");

  
  setFormData({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    date: '',
    message: '',
    destination: '',
  });

  
  if (onCancel) {
    onCancel();
  }
};
  if(showSuccess) {
  return (
    <div id='booking-form' className='container mx-auto p-8'>
      <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6'>
        <div className='text-center'>
          <div className='flex justify-center mb-4'>
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-green-600 mb-2">Booking Request Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for choosing {selectedPackage ? selectedPackage.title : 'TravelWorld'}. We'll contact you shortly to confirm your booking.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-green-800">
              A confirmation email will be sent to <strong>{formData.email}</strong>
            </p>
          </div>
        </div>
      </div>
      </div>
  )
}
return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 relative">
     

    
      <div className="mb-6">
        <h2 className="mb-2">Book Your Trip</h2>
        {selectedPackage ? (
          <>
            <p className="text-gray-600">
              Complete the form below to book <strong>{selectedPackage.title}</strong>
            </p>
            <div className="mt-2 inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
              ${selectedPackage.price} • {selectedPackage.duration}
            </div>
          </>
        ) : (
          <p className="text-gray-600">
            Complete the form below and we'll help you plan your perfect vacation
          </p>
        )}
      </div>

      
      <form onSubmit={handleSubmit} className="space-y-6">
        {!selectedPackage && (
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Preferred Destination *
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Where would you like to go?"
            />
          </div>
        )}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Number of Travelers *
            </label>
            <select
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
              <option value="6+">6+ Travelers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Preferred Travel Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Special Requests or Questions
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
          />
        </div>
        <div className="flex gap-4">
          {onCancel && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={`${onCancel ? 'flex-1' : 'w-full'} bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors`}
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookTrip