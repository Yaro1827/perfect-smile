import React from 'react'
import ToothBrush from "../assets/images/ToothBrush.jpg"
import Stomatology from "../assets/images/Stomatology.jpg"

export default function Safety() {
  return (
    <section className='max-w-7xl mx-auto mt-24'>
      <header className='flex flex-col gap-3 mb-10'>
        <span className='text-orange-500 font-medium uppercase tracking-wide'>
          Безпека
        </span>

        <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
          Увага до безпеки здоров'я
        </h2>

        <p className='text-gray-600 max-w-2xl'>
          Ми приділяємо окрему увагу для безпеки вашого здоров'я.
        </p>
      </header>
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300'>
          <h3 className='text-xl font-semibold text-gray-800 mt-3 mb-3'>
            Європейські стандарти стерилізації
          </h3>
          <p>
            У клініці Perfect Smile, наші інструменти проходять триетапний цикл по всім європейським стандартам стерилізації:
            1: Усунення видимих забруднень.
            2: Дизенфекція за допомогою спеціальних антисептичних засобів.
            3: Термічна та хімічна стерилізації для повного знищення мікроорганізмів.
            Це забезпечує максимальний рівень безпеки для здоров'я пацієнтів.
          </p>
          <div className='pt-3 flex items-center justify-center'>
            <img src={ToothBrush} alt="ToothBrush" className='w-90 h-90 rounded-xl object-cover' />
          </div>

        </div>
        <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300'>

          <div className=' pb-3 flex items-center justify-center'>
            <img src={Stomatology} alt="Stomatology" className='w-90 h-90 rounded-xl object-cover' />
          </div>

          <h3 className='text-xl font-semibold text-gray-800 mt-3 mb-3'>
            Стерилізація приміщення
          </h3>
          <p>
            Крім попереднь перерахованих етапів стерилізації інструментів у клініці Perfect Smile також регулярно проходить стерилізація приміщення за 6-ти етапною системою.
          </p>

        </div>
      </div>
    </section>
  )
}
