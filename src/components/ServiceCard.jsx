import React from 'react'
import { cardStyles, services } from '../data/services'



export default function ServiceCard({ service }) {
  return (

    <div className={cardStyles} key={service.id}>
      <img src={service.img} alt={service.name} className='w-full h-64 object-cover' />
      <div className='p-5 flex flex-col gap-4 flex-grow: 1'>
        <h3 className='text-xl font-semibold text-gray-800'>
          {service.name}
        </h3>
        <p className='font-medium text-gray-700 text-sm leading-relaxed'>
          {service.description}
        </p>
      </div>
    </div>
  );
}
