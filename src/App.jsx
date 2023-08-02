import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Clock from './components/Clock'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid mx-6 md:mx-12'>
      <div className='mt-2'>
      <Navbar/>
    </div>
    <div className="grid md:p-5">
    <Clock/>
   <Dashboard/>
    </div>
    </div>
    
  )
}

export default App
