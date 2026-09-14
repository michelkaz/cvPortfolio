import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueFlow from './components/ValueFlow'
import About from './components/About'
import WhatICanBring from './components/WhatICanBring'
import Experience from './components/Experience'
import DigitalTransformation from './components/DigitalTransformation'
import PaymentExpertise from './components/PaymentExpertise'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg bg-noise">
        <Navbar />
        <main>
          <Hero />
          <ValueFlow />
          <About />
          <WhatICanBring />
          <Experience />
          <DigitalTransformation />
          <PaymentExpertise />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
