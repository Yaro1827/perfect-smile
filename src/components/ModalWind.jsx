import React from 'react'
import Button from './Button'
import { CheckCircle2, X } from 'lucide-react'

export default function ModalWind({ isOpen, onClose }) {

    if (!isOpen) return null;
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div
                className='fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity'
                onClick={onClose}
            />
            <section
                className='bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100 relative z-10
                animate-in fade-in zoom-in-95 duration-200'>
                <button
                    onClick={onClose}
                    className='absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition'
                >
                    <X size={20} />
                </button>
                <div className='flex flex-col items-center gap-4'>
                    <div className='w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-500'>
                        <CheckCircle2 size={40} strokeWidth={2.5} />
                    </div>

                    <div className='space-y-2'>
                        <h3 className='text-2xl font-bold text-gray-800'>
                            Заявку прийнято!
                        </h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            Ваші дані прийнято. Наш адміністратор зв'яжеться з вами найближчим часом для підвтердження деталей.
                        </p>
                    </div>

                    <Button
                        variant='accent'
                        fullWidth
                        className='mt-2'
                        onClick={onClose}
                    >
                        Зрозуміло
                    </Button>
                </div>
            </section>
        </div>
    )
}
