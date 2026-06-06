import KidsDent from '../assets/images/KidsDent.jpg';
import DentHealth from '../assets/images/DentHealth.jpg';
import AetheticDent from '../assets/images/AetheticDent.jpg';
import DiagnosticDent from '../assets/images/DiagnosticDent.jpg';
import EndoDent from '../assets/images/EndoDent.jpg';
import GnatologyDent from '../assets/images/GnatologyDent.jpg';
import KhirugDent from '../assets/images/KhirugDent.jpg';
import OrtodontDent from '../assets/images/OrtodontDent.jpg';
import OrtopedDent from '../assets/images/OrtopedDent.png';

export const cardStyles = 'bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300';


export const services = [
    {
        id: 1,
        name: "Дитяча стоматологія",
        img: KidsDent,
        path: '/services/kids',
        description: "Безболісне лікування зубів для наймолодших пацієнтів",
    },
    {
        id: 2,
        name: "Стоматологічне лікування",
        img: DentHealth,
        path: '/services/general',
        description: "Комплексне лікування та професійна гігієна ротової порожнини",
    },
    {
        id: 3,
        name: "Естетична стоматологія",
        img: AetheticDent,
        path: '/services/aesthetic',
        description: "Відбілювання і реставрація зубів для вашої ідеальної посмішки",
    },
    {
        id: 4,
        name: "Діагностика ротової порожнини",
        img: DiagnosticDent,
        path: '/services/diagnostics',
        description: "Сучасна діагностика ротової порожнини за допомогою рентгену, а також панорамних знімків",
    },
    {
        id: 5,
        name: "Ендодонтичне лікування",
        img: EndoDent,
        path: '/services/endodontics',
        description: "Якісне лікування кореневих каналів під мікроскопом.",
    },
    {
        id: 6,
        name: "Гнатологія (лікування суглобів)",
        img: GnatologyDent,
        path: '/services/gnatology',
        description: "Діагностика та лікування проблем скронево-нижньощелепного суглоба.",
    },
    {
        id: 7,
        name: "Хірургічна стоматологія",
        img: KhirugDent,
        path: '/services/surgery',
        description: "Видалення зубів та імплантація будь-якої складності.",
    },
    {
        id: 8,
        name: "Ортодонтія (виправлення прикусу)",
        img: OrtodontDent,
        path: '/services/orthodontics',
        description: "Виправлення прикусу за допомогою брекет систем та елайнерів.",
    },
    {
        id: 9,
        name: "Ортопедична стоматологія",
        img: OrtopedDent,
        path: '/services/orthopedics',
        description: "Встановлення коронок, вінірів та протезів",
    },
];