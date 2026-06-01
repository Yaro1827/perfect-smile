import React from 'react'
import ToothLogo from '../logo/ToothLogo'
import { PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/navigation'

export default function Footer() {
  return (
    <footer className='w-full bg-gray-50 border-t border-gray-100 text-gray-600 px-6 py-10'>
      <div className='max-w-7xl mx-auto flex flex-col items-start gap-8'>
        <div className='flex items-center gap-2'>
          <ToothLogo width={40} height={40} />
          <h1 className='font-semibold text-gray-700 text-lg'>Perfect Smile </h1>
        </div>

        <nav className='flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium'>
          {navLinks.map((link) => (
            <Link to={link.path} key={link.id} className="hover:text-gray-800 transition hover:underline">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className='text-xs text-gray-400'>
          <p>© 2026 Perfect Smile. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
