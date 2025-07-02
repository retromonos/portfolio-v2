import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChevronDownIcon } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="text-[80px] text-right size-full font-(family-name:--font-haas-grot-disp-65)">
        Luke Cullen
        <div className="text-[30px] text-right size-full font-(family-name:--font-haas-grot-disp-55-roman)">
          Software Engineer | Designer | Full Stack Developer
        </div>
      </div>
      <button className="bg-white text-2xl px-16 py-2 rounded-md font-(family-name:--font-haas-grot-disp-45) tracking-[0.25em]">
        OPEN PORTFOLIO
      </button>
      <ChevronDownIcon className='mt-8' />
    </div>
  )
}

export default App
