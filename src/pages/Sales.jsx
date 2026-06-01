import React from 'react'
import PageLayout from '../components/PageLayout'
import PriceAccordion from '../components/PriceAccordion'
import { priceData } from '../data/prices'

export default function Sales() {
    return (
        <PageLayout
            title="Ціни на послуги"
            description="Ознайомтесь з базовою вартістю найпопулярніших процедур"
        >
            <section className='max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-50'>
                {priceData.map((item) => (
                    <PriceAccordion
                        key={item.id}
                        category={item.category}
                        services={item.services}
                    />
                ))}
                <p className='mt-10 text-center text-sm text-gray-400'>
                    Кінцева вартість лікування визначаетсья лікарем після проведення діагностики та складанням лікувального плану.
                </p>
            </section>
        </PageLayout>
    )
}
