import React from 'react'

import "./TotalExpenses.css"





const TotalExpenses = ({ expenses }) => {
    
   const receivedCookie = localStorage.getItem("expenses")
    
   const abc = receivedCookie? JSON.parse(receivedCookie): []

    console.log(receivedCookie)


    const result = abc
  .filter(item => item.amount > 0)
  .reduce((total, item) => total + item.amount, 0);

    console.log(result)



  return (
      <div>TotalExpenses: {result} </div>
  )
}

export default TotalExpenses