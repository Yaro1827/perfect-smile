import React from 'react'
import { PhoneCall, Stethoscope, ShieldCheck, Smile } from 'lucide-react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClinikIMG from '../assets/images/clinik.jpg';
import Button from '../components/Button';
import ServicePreview from '../components/ServicePreview';
import AboutShort from '../components/AboutShort';
import Safety from '../components/Safety';
import ModalWind from '../components/ModalWind';

export default function Home() {

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setPhoneError('')
    const cleanPhone = phone.replace(/[\s()\-]/g, '');
    const phoneRegex = /^\+380\d{9}$/
    if (!cleanPhone) {
      setPhoneError('Будь-ласка введіть номер телефону')
      return;
    }

    if (!phoneRegex.test(cleanPhone)) {
      setPhoneError("Номер має починатися з +380 та містити 9 цифр після цього")
      return
    }

    console.log("Ваш номер успішно прийнято: ", cleanPhone)
    setPhone('')
    setIsModalOpen(true)
  }

  return (
    <main className='pt-24 px-6 pb-24'>
      <section className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch '>
        <div className='bg-gradient-to-br from-orange-200 to-white border border-gray-200 rounded-xl flex relative '>
          <img src={ClinikIMG} alt="ClinikIMG" className='rounded-xl w-full h-full object-cover' />
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
            Сучасна стоматологічна клініка Perfect Smile
          </h1>

          <p className='text-gray-700 text-lg'>
            Сучасне лікування із використанням новітнього обладнання та професійних лікарів із багаторічним досвідом.
          </p>

          <div className='grid grid-cols-3 gap-4 text-center'>
            <div className='flex flex-col items-center gap-2'>
              <Stethoscope className='text-orange-600' />
              <span className='text-sm'>Досвідченні лікарі</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <ShieldCheck className='text-orange-600' />
              <span className='text-sm'>Сучасне обладнання</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Smile className='text-orange-600' />
              <span className='text-sm'>Комфортні умови</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className='bg-gradient-to-r from-orange-200 to-orange-50 text-gray-800 p-6 rounded-xl flex flex-col gap-4'
          >
            <h3 className='text-xl font-semibold'>З'явилися питання?</h3>
            <p>
              Залиште свій номер телефону і передзвонимо вам для консультації
            </p>

            <div className='flex gap-2'>
              <input
                type="text"
                value={phone}
                onChange={(e) => {setPhone(e.target.value)
                  if (phoneError) {
                    setPhoneError('')
                  }
                }}
                placeholder='+380...'
                className={`flex-1 px-4 py-2 rounded-lg text-gray-800 outline-none border transition-colors
                  ${phoneError ? 'border-red-400 focus:border-red-500' : 'border-transparent border-orange-400'}`}
              />

              <button
                type='submit'
                className='bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition'
              >
                Відправити
              </button>
              {phoneError && <p className='text-red-500 text-xs mr-1 ml-1'>{phoneError}</p>}
            </div>
          </form>
        </div>
      </section>
      <AboutShort />
      <ServicePreview />
      <Safety />
      <ModalWind
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}
