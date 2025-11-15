import React, { useState } from 'react'

const courseData = {
  All: [
    {
      id: 1,
      title: 'Professional Certification in Data Analytics with GenAI',
      institution: 'Vishlesan i-hub, IIT Patna',
      badge: 'Certification with IIT',
      duration: '6 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '🤖',
      icons: ['⚡', '📊', '🎓'],
      category: 'working'
    },
    {
      id: 2,
      title: 'PG Certification in Data Analytics with GenAI',
      institution: 'E&ICT Academy, IIT Guwahati',
      badge: 'Certification with IIT',
      duration: '6 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '🏛️',
      icons: ['⚡', '📊', '🎓'],
      category: 'working'
    },
    {
      id: 3,
      title: 'Data Analytics Job Bootcamp with GenAI',
      institution: 'Coding Ninjas',
      badge: 'Job bootcamp',
      duration: '6 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '💻',
      icons: ['⚡', '💚', '💡'],
      category: 'working'
    },
  ],
  'Data Analytics': [
    {
      id: 1,
      title: 'Professional Certification in Data Analytics with GenAI',
      institution: 'Vishlesan i-hub, IIT Patna',
      badge: 'Certification with IIT',
      duration: '6 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '🤖',
      icons: ['⚡', '📊', '🎓'],
      category: 'working'
    },
    {
      id: 2,
      title: 'PG Certification in Data Analytics with GenAI',
      institution: 'E&ICT Academy, IIT Guwahati',
      badge: 'Certification with IIT',
      duration: '6 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '🏛️',
      icons: ['⚡', '📊', '🎓'],
      category: 'working'
    },
  ],
  'Generative AI': [
    {
      id: 3,
      title: 'Advanced Certification in GenAI & Multi Agent Systems',
      institution: 'Coding Ninjas',
      badge: 'Certification',
      duration: '6 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '🤖',
      icons: ['⚡', '🧠', '💡'],
      category: 'working'
    },
  ],
  'Full Stack Development': [
    {
      id: 4,
      title: 'Full Stack Web Development Job Bootcamp with GenAI',
      institution: 'Coding Ninjas',
      badge: 'Job bootcamp',
      duration: '9 months',
      gradient: 'from-purple-600 to-blue-600',
      emoji: '💻',
      icons: ['⚡', '🌐', '💡'],
      category: 'working'
    },
  ]
}

export default function Courses(){
  const [activeTab, setActiveTab] = useState('All')
  const [category, setCategory] = useState('working')

  const tabs = ['All', 'Data Analytics', 'Generative AI', 'Full Stack Development']
  const courses = courseData[activeTab] || []

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Title */}
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-300 text-center mb-12">
          OUR COURSES
        </h2>

        {/* Category Tabs */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">For working professionals</h3>
          <div className="flex flex-wrap gap-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === tab
                    ? 'border-2 border-gray-900 text-gray-900 bg-white'
                    : 'border-2 border-gray-300 text-gray-500 hover:border-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Course Image with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center text-7xl relative`}>
                {course.emoji}
              </div>

              {/* Course Content */}
              <div className="p-6 relative">
                {/* Circular Logo Badge - Properly Positioned */}
                <div className="absolute -top-7 left-6">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl border-4 border-white shadow-lg">
                    📋
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-gray-900 text-base leading-snug mb-3 mt-4 min-h-16">
                  {course.title}
                </h4>

                {/* Institution */}
                <p className="text-sm text-gray-600 mb-4">{course.institution}</p>

                {/* Badge */}
                <div className="mb-5 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    🎓
                  </div>
                  <span className="inline-block bg-yellow-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4"></div>

                {/* Icons and Duration */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-2">
                    {course.icons.map((icon, idx) => (
                      <span key={idx} className="text-xl">{icon}</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
