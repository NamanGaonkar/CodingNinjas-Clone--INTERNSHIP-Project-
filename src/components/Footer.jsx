import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Coding Ninjas</h4>
            <p className="text-gray-400 text-sm">Transform your tech career with us.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Products</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Job Bootcamp</a></li>
              <li><a href="#" className="hover:text-white transition">Code 360</a></li>
              <li><a href="#" className="hover:text-white transition">Certifications</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Community</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">10X Club</a></li>
              <li><a href="#" className="hover:text-white transition">Student Chapters</a></li>
              <li><a href="#" className="hover:text-white transition">Hire From Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Sunrise Mentors Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
