import React from 'react'
import PageLayout from '../components/PageLayout'
import AboutSection from '../components/AboutSection'
import Advantages from '../components/Advantages'
import { ShieldCheck, Microscope, Users } from 'lucide-react'
import History from '../assets/images/History.jpg'
import Instrument from '../assets/images/Instrument.jpg'

export default function About() {
  return (
    <PageLayout
      title="Детальніше про нас"
      description="На цій сторінці ви можете подивитись наше найсучасніше обладнання, історію створення нашої стоматології, а також наші основні переваги"
    >
      <AboutSection
        tag="Як ми з'явилися."
        title="Історія створення Perfect Smile"
        description="У 2021 відкрилась наша клініка, це був невеличке приміщення з дувома кімнатами. Нашою перевагою була не кількість крісел, а увага до пацієнтів. З часом ми розширювалися, оновлювали наш інвентар сучасних технологій, наша ціль була зробити Perfect Smile стоматологічною клінікою з найсучаснішими технологіями і підтримкою усіх європейських стандартів."
        image={History}
      />

      <AboutSection
        tag="Технології"
        title="Найсучасніше обладнання"
        description="Ми — це сучасна клініка, де поєднуються цифрові технології лікування та щира людська турбота. Наша назва — це не просто слова, а результат спільної роботи лікаря та пацієнта. Ми віримо, що найкращий інструмент стоматолога — це довіра пацієнта. Хоча сучасні лазери мікроскопи та 3D-сканування нам у цьому дуже допомагають. На картнці зліва показано використання сучасного мікроскопа при лікуванні."
        image={Instrument}
        reverse={true}
      />

      <Advantages />
    </PageLayout>
  )
}
