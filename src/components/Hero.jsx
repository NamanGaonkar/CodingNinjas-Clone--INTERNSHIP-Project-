import React, { useState } from 'react'

export default function Hero(){
  const [formData, setFormData] = useState({
    experience: '',
    topic: '',
    name: '',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-green-400 text-sm font-medium mb-3">Restricted by opportunities?</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Get the tech career you deserve. <span className="text-white">Faster.</span>
            </h1>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-xl mt-1">✓</span>
                <div>
                  <p className="font-semibold">128% average hike</p>
                  <p className="text-gray-400 text-sm">via our placement cell</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-xl mt-1">✓</span>
                <div>
                  <p className="font-semibold">1.5 Lac+ learners</p>
                  <p className="text-gray-400 text-sm">cracked top tech companies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-xl mt-1">✓</span>
                <div>
                  <p className="font-semibold">1,400+ alumni in MAANG</p>
                  <p className="text-gray-400 text-sm">& 103 unicorn startups</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Course finder form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's find the right course for you</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <div className="space-y-2">
                  {['Working Professional - Technical Roles', 'Working Professional - Non Technical', 'College Student - Final Year', 'College Student - 1st to Pre-final Year', 'Others'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="experience" 
                        value={opt}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select topic of interest</label>
                <select 
                  name="topic" 
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select your options/choices</option>
                  <option>Data Analytics</option>
                  <option>Full Stack Development</option>
                  <option>DSA & Competitive Programming</option>
                  <option>Generative AI</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Find your course
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to <a href="#" className="underline">Privacy Policy</a> & <a href="#" className="underline">Terms of use</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
