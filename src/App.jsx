import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './component/First'
import Second from './component/Second'
import Third from './component/Third'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tabl from './component/Tabl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/s" element={<Second/>}/>
        <Route path="/t" element={<Third/>}/>
        <Route path="/tab" element={<Tabl/>}/>
     </Routes>
    
    </>
  )
}

export default App
