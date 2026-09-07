
import { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList';
import TotalExpenses from './components/TotalExpenses/TotalExpenses';





function App() {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : [];
  })

   useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])
  
  const addExpense = (expense) => {

    setExpenses((prev) => [...prev, expense])
  

   
   
   
  }

   const clearCookies = () => {
     console.log('cleared')
     localStorage.removeItem("expenses")
     localStorage.clear()
   }
  
   const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id != id) )
   }
  
 

  return (
    <>
       
      <div className="app">
        
        <ExpenseForm onAddExpense={addExpense}/>
        <h3>Expense List below:</h3> 
        <button onClick={clearCookies} >Clear</button>

        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
       
        
        <TotalExpenses expenses={expenses}  />
       
        </div>
       
        
        
    </>
  )
}

export default App
