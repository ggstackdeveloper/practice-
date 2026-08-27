import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container">
          <h1>Welcome to the Expense Tracker app</h1>
          <p>Track your expenses with ease!</p>
        </div>
    </>
  )
}

export default App
