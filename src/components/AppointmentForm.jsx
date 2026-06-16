import React from 'react'
import Button from './Button'
import Input from './Input'
import DatePicker from 'react-datepicker'
import { PatternFormat } from 'react-number-format'
import { useState } from 'react'
import { data, useNavigate } from 'react-router-dom'
import { Calendar, ChevronDown } from 'lucide-react'
import { services } from '../data/services'
import ModalWind from './ModalWind'
import "react-datepicker/dist/react-datepicker.css";


export default function AppointmentForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: new Date(),
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();
  const labelStyle = 'block text-sm font-medium text-gray-700 mb-1';
  const fieldsetStyle = 'mb-4 border-none p-0'

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ'’\s\-]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Будь ласка, введіть своє ім'я";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Ім'я занадто коротке";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Ім'я може містити лише літери";
    }


    if (!formData.phone) {
      newErrors.phone = "Будь ласка, введіть номер телефону";
    } else if (formData.phone.length < 9) {
      newErrors.phone = "Введіть повний номер телефону (9 цифр)"
    }


    if (!formData.service) newErrors.service = "Оберіть послугу";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      console.log("Данні форми: ", formData);
      setIsModalOpen(true)
    }
  };

  function handleCloseModal() {
    setIsModalOpen(false);
    setFormData({
      name: "",
      phone: "",
      date: new Date(),
      service: "",
      message: "",
    });
    navigate('/')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            label="Введіть ваше ім'я"
            id="name"
            name="name"
            placeholder="Ім'я"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            required
          />

          <fieldset className={fieldsetStyle}>
            <label className={labelStyle}>
              Телефон <span className='text-red-500'>*</span>
            </label>
            <PatternFormat
              format="+38 (0##) ###-##-##"
              allowEmptyFormatting
              mask="_"
              value={formData.phone}
              onValueChange={(values) => {
                setFormData({ ...formData, phone: values.value });
              }}
              customInput="input"
              type="tel"
              placeholder="+38 (0__) ___-__-__"
              className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-colors
              ${errors.phone ? 'border-red-400' : 'border-gray-300 focus:border-accent'}`}
            />
            {errors.phone && <p className='text-red-500 text-xs mt-1'>{errors.phone}</p>}
          </fieldset>

          <fieldset className='mb-4 border-none p-0 relative'>
            <label className={labelStyle}>Дата візиту</label>
            <div className="relative">
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
              <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={18} />
            </div>
          </fieldset>

          <fieldset className={fieldsetStyle}>
            <label className={labelStyle}>Послуга</label>
            <div className='relative'>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className={`w-full appearance-none border rounded-xl px-3 py-2.5 text-sm outline-none bg-white
                  ${errors.service ? "border-red-400" : "border-gray-300 focus:border-accent"}`}
              >
                <option value="">Оберіть послугу...</option>
                {services.map((s, idx) => (
                  <option key={idx} value={s.name}>{s.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16} />
            </div>
            {errors.service && <p className='text-red-500 text-xs mt-1'>{errors.service}</p>}
          </fieldset>
        </div>

        <div className='mt-4'>
          <label className={labelStyle}>Ваше повідомлення (необовязково) </label>
          <textarea
            rows="4"
            className='w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-accent resize-none'
            placeholder='Повідомлення'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          >
          </textarea>
        </div>

        <Button
          variant='accent'
          fullWidth
          className='mt-6 h-12 text-base'
          type="submit"
        >
          Підтвердити запис
        </Button>
      </form>
      <ModalWind
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}