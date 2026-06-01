import React from 'react'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import PageLayout from '../components/PageLayout';

export default function Services() {
  return (
    <PageLayout
      title="Послуги"
      description="Список всіх наших послуг від профейсійної гігєни до складного протезування."
    >
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </PageLayout>
  );
}
