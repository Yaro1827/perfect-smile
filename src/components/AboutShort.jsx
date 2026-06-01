import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function AboutShort() {

  const divStyles = 'bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300';
  const spanStyles = 'text-5xl font-bold text-orange-200';
  const hStyles = 'text-xl font-semibold text-gray-800 mt-3 mb-3';
  const pStyles = 'text-gray-600 leading-relaxed';

  return (
    <section className='max-w-7xl mx-auto mt-24'>
      <header className='flex flex-col gap-3 mb-10'>
        <span className='text-orange-500 font-medium uppercase tracking-wide'>
          Скороченно про нас
        </span>

        <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
          Чому слід вибрати саме нас?
        </h2>

        <p className='text-gray-600 max-w-2xl'>
          Ми поєднуємо сучасні технології, комфорт для пацієнтів та досвідченних спеціалістів для якісного лікування.
        </p>
      </header>

      <div className='grid md:grid-cols-3 gap-6'>
        <div className={divStyles}>
          <span className={spanStyles}>1</span>
          <h3 className={hStyles}>Сучасне обладнання</h3>
          <p className={pStyles}>
            Ми використовуємо найсучасніші стоматологічні технології та сучасне обладнання для максимально ефективного та точного лікування
          </p>
        </div>
        <div className={divStyles}>
          <span className={spanStyles}>2</span>
          <h3 className={hStyles}>Комфорт та підтримка</h3>
          <p className={pStyles}>
            Ми підтримуємо постійний зв'язок з пацієнтами та підбираємо зручний графік відвідувань.
          </p>
        </div>
        <div className={divStyles}>
          <span className={spanStyles}>3</span>
          <h3 className={hStyles}>Досвідченні спеціалісти</h3>
          <p className={pStyles}>
            У нашій стоматології працюють з стоматологічною освітою і досвідом.
          </p>
        </div>
      </div>

      <div className='mt-10 felx justify-center'>
        <Link to="/about">
          <Button variant='accent' size='lg'>
            Дивись більше про нас
          </Button>
        </Link>
      </div>
    </section>
  )
}
