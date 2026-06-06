import React from 'react'
import { ShieldCheck, Clock, Award, Heart } from 'lucide-react'


export const advantages = [
    { icon: <ShieldCheck size={32} />, title: "Безпека", desc: "Стерилізація за стандартами МОЗ" },
    { icon: <Award size={32} />, title: "Якість", desc: "Гарантія на всі види робіт 2 роки" },
    { icon: <Clock size={32} />, title: "Швидкість", desc: "Власна цифрова лабораторія" },
    { icon: <Heart size={32} />, title: "Турбота", desc: "Безболісне лікування" },
];

export default function Advantages() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20'>
      {advantages.map((item, idx) => (
        <div key={idx} className='p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all'>
            <div className='text-orange-600 mb-4'>{item.icon}</div>
            <h3 className='text-orange-600 mb-4'>{item.title}</h3>
            <p className='text-sm text-gray-500'>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
