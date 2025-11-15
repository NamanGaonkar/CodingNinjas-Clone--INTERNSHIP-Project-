import React from 'react'

const stats = [
  { id: 1, label: 'Learners', value: '1.5L+' },
  { id: 2, label: 'Alumni in MAANG', value: '1,400+' },
  { id: 3, label: 'Highest CTC', value: '1 Cr+' },
  { id: 4, label: 'Avg Hike', value: '128%' },
]

export default function Stats(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold">9 years of transforming tech careers</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.id} className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-extrabold">{s.value}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
