import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import About from './components/About';
import Contact from './components/Contact';
import OrderPlacement from './components/OrderPlacement';
import Stats from './components/Stats';
import Process from './components/Process';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <OrderPlacement />
      <Contact />
      <Footer />
      <FloatingCallButton />
    </div>
  )
}

export default App
