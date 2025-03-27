import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Layout/Header'
import { MealSummary } from './components/Meals/MealSummary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MealSummary/>
    </>
  )
}

export default App
