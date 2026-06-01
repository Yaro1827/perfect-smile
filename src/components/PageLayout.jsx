import React from 'react'

export default function PageLayout({ title, description, children }) {
  return (
    <main className='pt-32 pb-20 px-6'>
      <header className='max-w-7xl mx-auto text-center mb-16 flex flex-col gap-3'>
        <span className='text-orange-600 font-semibold uppercase tracking-widest text-sm'>
          Perfect Smile
        </span>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
          {title}
        </h1>
        {description && (
          <p className='text-gray-600 text-lg max-w-xl mx-auto'>
            {description}
          </p>
        )}
      </header>
      <section className='max-w-7xl mx-auto'>
        {children}
      </section>
    </main>
  )
}
