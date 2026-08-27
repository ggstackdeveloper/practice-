import { useState } from 'react'
import './App.css'
import Expenses from './components/expenses'
import Expenselist from './components/expenselist'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container">
          <h1>Welcome to the Expense Tracker app</h1>
        <p>Track your expenses with ease!</p>
        
        <Expenses />
        <Expenselist />
        
        </div>
    </>
  )
}

export default App
