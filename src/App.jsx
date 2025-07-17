import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import './App.css'
import Navbar from './components/navbar/navbar';
import HeroSection from './components/hero/HeroSection';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {


  return (
    <main className='w-[100%]'>
      <Navbar />
      <HeroSection />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
