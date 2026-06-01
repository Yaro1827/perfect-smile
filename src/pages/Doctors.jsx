import React from 'react'
import PageLayout from '../components/PageLayout'
import DoctorCard from '../components/DoctorCard'
import { doctors } from '../data/doctors'

export default function Doctors() {
  return (
    <PageLayout
      title="Наші лікарі"
      description="Команда професіоналів, яка подбає про здоров'я та красу вашої посмішки."
    >
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </section>
    </PageLayout>
  )
}
