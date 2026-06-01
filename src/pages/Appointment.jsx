import React from 'react'
import PageLayout from '../components/PageLayout'
import AppointmentForm from '../components/AppointmentForm'

export default function Appointment() {
  return (
    <PageLayout
      title="Онлайн запис"
      description="Форма онлайн запису на прийом. Заповніть форму нижче і ми вам передзвонимо."
    >
      <AppointmentForm />
    </PageLayout>
  )
}
