import React from 'react'
import Button from './Button'

import KidsDent from '../assets/images/KidsDent.jpg'
import DentHealth from '../assets/images/DentHealth.jpg'
import AetheticDent from '../assets/images/AetheticDent.jpg'

import { Link } from 'react-router-dom'


export default function ServicePreview() {

    const cardStyles = 'bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300';
    const cards = [
        { id: 1, img: KidsDent, name: "Дитяча стоматологія", path: "/services/kids" },
        { id: 2, img: DentHealth, name: "Стоматологічне лікування", path: "/services/general" },
        { id: 3, img: AetheticDent, name: "Естетична стоматологія", path: "/services/aesthetic" },
    ]

    return (
        <section className='max-w-7xl mx-auto mt-24'>
            <header className='flex flex-col gap-3 mb-10'>
                <span className='text-orange-500 font-medium uppercase tracking-wide'>
                    Наші послуги
                </span>

                <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
                    Популярні стоматологічні послуги
                </h2>

                <p className='text-gray-600 max-w-2xl'>
                    надаємо широкий спектр стоматологічних послуг для дітей та дорослих із використанням сучасних технологій.
                </p>
            </header>

            <main className='grid md:grid-cols-3 gap-6'>
                {cards.map((service) => (
                    <div className={cardStyles} key={service.id}>
                        <img src={service.img} alt={service.name} className='w-full h-64 object-cover' />
                        <div className='p-5 flex flex-col gap-4 flex-grow: 1'>
                            <h3 className='text-xl font-semibold text-gray-800'>
                                {service.name}
                            </h3>
                        </div>
                    </div>
                ))}
                <div className='mt-10 felx justify-center'>
                    <Link to="/services">
                        <Button variant='accent' size='lg'>
                            Всі наші послуги
                        </Button>
                    </Link>
                </div>
            </main>
        </section>
    )
}
