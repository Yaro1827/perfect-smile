import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function PriceAccordion({ category, services }) {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function handleBooking() {
        navigate("/appointment")
    };

    return (
        <div className='border-b border-gray-200 last:border-none'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-full py-5 flex justify-between items-center text-left hover:text-accent transition-colors group'
            >
                <span className='text-xl font-medium text-gray-800 group-hover:text-orange-600 transition-colors'>
                    {category}
                </span>
                <div className={`relative w-6 h-6 flex items-center justify-center`}>
                    <div className='absolute w-4 h-0.5 bg-gray-400 rounded-full'></div>
                    <div className={`absolute w-0.5 h-4 bg-gray-400 rounded-full transition-transform duration-300 
            ${isOpen
                            ? "rotate-90 opacity-0"
                            : ""}`}></div>
                </div>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out 
        ${isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-6"
                    : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className='overflow-hidden'>
                    <div className='flex flex-col gap-5 px-2'>
                        {services.map((item, index) => (
                            <div key={index} className='flex justify-between items-start py-2 border-b border-gray-50 last:border-0 gap-4'>
                                <span className='text-gray-600 leading-snug'>{item.name}</span>
                                <span className='font-semibold text-gray-900 border-b-2 border-orange-100 whitespace-nowrap'>
                                    {item.price}
                                </span>
                            </div>
                        ))}
                        <div className='mt-4'>
                            <Button
                                variant='accent'
                                size='md'
                                onClick={handleBooking}
                                className='px-8'
                            >
                                Записатися на прийом
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
