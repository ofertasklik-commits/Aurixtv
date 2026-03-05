import { HeroSection } from '@/components/HeroSection'
import { MoviesCarousel } from '@/components/MoviesCarousel'
import { DevicesSection } from '@/components/DevicesSection'
import { PricingPlans } from '@/components/PricingPlans'
import { TechnicalFeatures } from '@/components/TechnicalFeatures'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <HeroSection />
      <MoviesCarousel />
      <DevicesSection />
      <PricingPlans />
      <TechnicalFeatures />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
