import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { MetricsBanner } from "./components/MetricsBanner"
import { HowItWorks } from "./components/HowItWorks"
import { Propietarios } from "./components/Propietarios"
import { Inquilinos } from "./components/Inquilinos"
import { FAQ } from "./components/FAQ"
import { Waitlist } from "./components/Waitlist"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MetricsBanner />
        <HowItWorks />
        <Propietarios />
        <Inquilinos />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

export default App
