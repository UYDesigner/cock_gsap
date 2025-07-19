import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import HeroSection from './components/hero/HeroSection';
import Cocktails from './components/cocktail/Cocktails'
import About from './components/About/About';
import Art from './components/Art/Art';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {


  return (
    <main className='w-[100%]'>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About/>
      <Art/>

    </main>
  )
}

export default App
