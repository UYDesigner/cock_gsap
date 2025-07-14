import { useState } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' h-[100vh] font-bold flex-center'>
       hellow
      </div>
     
    </>                        
  )
}

export default App
