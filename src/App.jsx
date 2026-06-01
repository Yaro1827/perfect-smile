import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Sales from './pages/Sales'
import Appointment from './pages/Appointment'

import './App.css'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
