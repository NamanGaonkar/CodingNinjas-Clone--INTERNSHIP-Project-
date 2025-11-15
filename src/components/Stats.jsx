import React from 'react'

const stats = [
  { id: 1, label: 'Learners Placed', value: '1.5L+', icon: '👥' },
  { id: 2, label: 'Alumni in MAANG', value: '1,400+', icon: '🌟' },
  { id: 3, label: 'Highest CTC', value: '₹1 Cr+', icon: '💰' },
  { id: 4, label: 'Avg Hike', value: '128%', icon: '📈' },
]

export default function Stats(){
  return (
    <section id="stats" className="py-12">
      <h2 className="text-3xl font-bold text-gray-900">9 Years of Transforming Tech Careers</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.id} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition">
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div className="text-3xl font-extrabold text-indigo-600">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Coding Ninjas?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex space-x-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900">Fastest 1:1 Doubt Support</h4>
              <p className="text-sm text-gray-600 mt-1">Chat, voice notes, or calling - always available</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900">Stanford/IIT/MAANG Faculty</h4>
              <p className="text-sm text-gray-600 mt-1">Learn from industry leaders and alumni</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900">Placement Assistance</h4>
              <p className="text-sm text-gray-600 mt-1">Direct support for landing dream roles</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900">Integrated Prep Platform</h4>
              <p className="text-sm text-gray-600 mt-1">Learn, practice, and interview all in one place</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
