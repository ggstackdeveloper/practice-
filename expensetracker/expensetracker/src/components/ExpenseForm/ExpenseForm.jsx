import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = ({ onAddExpense }) => {


    const [title, setTitle] = useState()
    const [amount, setAmount] = useState()

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log('add btn clicked')

        if (!title || !amount) {
            return alert('please fill all fields');
        } 
            const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
            
        } 
        
       
       onAddExpense(newExpense)
       
        setTitle("")
        setAmount("")
    }

  return (
      <div>
          <h2>welcome to Tracker</h2>
          <form action="" onSubmit={handlesubmit}>
              <input type="text" className='title' value={title} placeholder='Enter title..' onChange={(e)=>setTitle(e.target.value)} />
              <input type="number" className='amount' value={amount}  placeholder='Enter amount..' onChange={(e)=>setAmount(e.target.value)} />
              <button type='submit'>Add Expense</button>
          </form>
          
    </div>
  )
}

export default ExpenseForm