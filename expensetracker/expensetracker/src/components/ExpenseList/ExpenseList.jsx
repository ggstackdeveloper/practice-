import React from 'react'
import './ExpenseList.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'




const ExpenseList = ({ expenses, onDelete }) => {

  if(expenses.length === 0){
        return <p className='no-expense '>No Expenses Yet</p>
    }

    // console.log(expenses)
  
  return (
    <div>

    
       {expenses.map((item) => (
            <ExpenseItem key={item.id} item={item} onDelete={onDelete}  />
       ))}
   

    </div>

  )
}

export default ExpenseList