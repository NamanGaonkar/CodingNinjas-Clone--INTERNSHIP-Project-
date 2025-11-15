import React, { useState } from 'react'

export default function Header(){
  const [profDropdown, setProfDropdown] = useState(false)
  const [studentDropdown, setStudentDropdown] = useState(false)

  const profCourses = {
    Domain: [
      { name: 'Data Analytics', icon: '📊' },
      { name: 'Generative AI', icon: '🤖' },
      { name: 'Full Stack Development', icon: '💻' }
    ],
    'Certification with IIT': [
      { name: 'Vishlesan i-hub, IIT Patna', course: 'Professional Certification in Data Analytics with GenAI' },
      { name: 'E&ICT Academy, IIT Guwahati', course: 'PG Certification in Data Analytics with GenAI' }
    ],
    'Job bootcamp': [
      { name: 'Coding Ninjas', course: 'Data Analytics Job Bootcamp with GenAI' }
    ]
  }

  const studentCourses = {
    Domain: [
      { name: 'DSA & Competitive Programming', icon: '⚡' },
      { name: 'Full Stack Development', icon: '💻' },
      { name: 'Data Structures', icon: '📚' }
    ],
    'Certification with IIT': [
      { name: 'IIT Patna', course: 'Training and Internship Certification in Data Analytics' },
      { name: 'IIT Madras', course: 'Training and Internship Certification in Full Stack' }
    ],
    'Job bootcamp': [
      { name: 'Coding Ninjas', course: 'Campus Recruitment Programs' }
    ]
  }

  return (
    <>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 text-center py-2 px-4">
        <p className="text-sm font-medium">
          ✨ Become AI ready <a href="#" className="underline font-bold">check our AI courses</a>
        </p>
      </div>

      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-900">
                <span className="text-orange-500">coding</span><span className="text-gray-900">ninjas</span>
              </div>
              <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <div className="relative group">
                  <button 
                    className="text-gray-700 hover:text-gray-900 flex items-center space-x-1 py-4"
                    onMouseEnter={() => setProfDropdown(true)}
                    onMouseLeave={() => setProfDropdown(false)}
                  >
                    <span>For working professionals</span>
                    <span className="text-xs">▼</span>
                  </button>
                  {profDropdown && (
                    <div 
                      className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-8 min-w-max w-full"
                      onMouseEnter={() => setProfDropdown(true)}
                      onMouseLeave={() => setProfDropdown(false)}
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {Object.entries(profCourses).map(([category, items]) => (
                          <div key={category}>
                            <h4 className="font-semibold text-gray-900 text-sm mb-4">{category}</h4>
                            <ul className="space-y-3">
                              {items.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-orange-500 cursor-pointer transition">
                                  {item.icon && <span className="mr-2">{item.icon}</span>}
                                  <div>
                                    <p className="text-sm font-medium">{item.name || (item.course ? 'Coding Ninjas' : item.name)}</p>
                                    {item.course && <p className="text-xs text-gray-500">{item.course}</p>}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button 
                    className="text-gray-700 hover:text-gray-900 flex items-center space-x-1 py-4"
                    onMouseEnter={() => setStudentDropdown(true)}
                    onMouseLeave={() => setStudentDropdown(false)}
                  >
                    <span>For College Students</span>
                    <span className="text-xs">▼</span>
                  </button>
                  {studentDropdown && (
                    <div 
                      className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-8 min-w-max w-full"
                      onMouseEnter={() => setStudentDropdown(true)}
                      onMouseLeave={() => setStudentDropdown(false)}
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {Object.entries(studentCourses).map(([category, items]) => (
                          <div key={category}>
                            <h4 className="font-semibold text-gray-900 text-sm mb-4">{category}</h4>
                            <ul className="space-y-3">
                              {items.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-orange-500 cursor-pointer transition">
                                  {item.icon && <span className="mr-2">{item.icon}</span>}
                                  <div>
                                    <p className="text-sm font-medium">{item.name}</p>
                                    {item.course && <p className="text-xs text-gray-500">{item.course}</p>}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <button className="text-sm px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-medium">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
