import { SiteHeader } from './components/site-header'
import { HeroSection } from './components/hero-section'
import { BenefitsSection } from './components/benefits-section'
import { HowSection } from './components/how-section'
import { FreeSection } from './components/free-section'
import { DifferenceSection } from './components/difference-section'
import { ProcessSection } from './components/process-section'
import { FaqSection } from './components/faq-section'
import { SpecSection } from './components/spec-section'
import { ContactSection, SiteFooter } from './components/contact-section'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowSection />
        <FreeSection />
        <DifferenceSection />
        <ProcessSection />
        <FaqSection />
        <SpecSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
