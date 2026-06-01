import React from 'react'
import { cardStyles } from '../data/services'
import { doctors } from '../data/doctors'

export default function DoctorCard({ doctor }) {
  return (
    <div className={cardStyles} key={doctor.id}>
      <img src={doctor.img} alt={doctor.name} className='w-full aspect-[3/4] object-cover object-top' />
      <div className='p-5 flex flex-col gap-4 flex-grow: 1'>
        <h3 className='text-xl font-semibold text-gray-800'>
          {doctor.name}
        </h3>
        <h2 className='text-xl font-medium text-gray-700'>
          {doctor.specialization}
        </h2>
        <p className='font-medium text-gray-700 text-sm leading-relaxed uppercase tracking-wider'>
          {doctor.experience} досвіду
        </p>
        <p className='font-medium text-gray-600 text-sm leading-relaxed '>
          {doctor.bio}
        </p>
      </div>
    </div>
  )
}
