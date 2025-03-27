import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Layout/Header'
import { MealSummary } from './components/Meals/MealSummary'
import { Meals } from './components/Meals/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-[#4c4343]">
      <Header/>
     
      <MealSummary/>
      <Meals/>
      </div>
    </>
  )
}

export default App
