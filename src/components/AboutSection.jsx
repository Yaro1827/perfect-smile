import React from 'react'

export default function AboutSection({tag, title, description, image, reverse}) {
  return (
    <section className={`py-16 flex flex-col md:items-center gap-12 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className='flex-1 space-y-4'>
        <span className='text-orange-600 font-semibold uppercase tracking-wider text-sm'>
            {tag}
        </span>
        <h2 className='text-3xl font-bold text-gray-900 leading-tight'>
            {title}
        </h2>
        <p className='text-gray-600 leading-relaxed text-lg'>
            {description}
        </p>
      </div>
      <div className='flex-1'>
        <img 
            src={image} 
            alt={title}
            className='w-full h-90 object-cover rounded-3xl shadow-xl border border-gray-100' 
            />
      </div>
    </section>
  )
}
