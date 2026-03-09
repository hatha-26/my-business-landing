import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Footer } from '@/components/sections/Footer'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'

export default function HomePage() {
  return (
    <main className="bg-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Footer />
    </main>
  )
}