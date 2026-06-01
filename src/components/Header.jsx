import React from 'react'
import ToothLogo from '../logo/ToothLogo'
import { PhoneCall } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navigation'
import ToothIMG from '../assets/images/tooth.png';

export default function Header() {

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-orange-50 px-6 py-4 flex items-center justify-between shadow-sm border-b border-gray-200'>
      <div className='flex items-center gap-2'>
        <ToothLogo width={40} height={40} />
        <h1 className='font-semibold text-gray-700 text-lg'>Perfect Smile </h1>
      </div>

      <nav className='hidden md:flex items-center gap-6 text-gray-600 font-medium'>
        {navLinks.map((link) => (
          <NavLink to={link.path} key={link.id} className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-semibold"
              : "hover:text-orange-600 transition"}>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <p className='hidden md:flex text-gray-600 text-sm text-center leading-tight'>Пн- пт з 9:00-20:00. Субота з 9:00-18:00. Неділя вихідний.</p>

      <div className='flex items-center gap-2 text-gray-600 font-medium'>
        <PhoneCall size={20} className='hidden sm:block' />
        <span className='hidden sm:block'>+350505315794</span>
      </div>
    </header>
  )
}
