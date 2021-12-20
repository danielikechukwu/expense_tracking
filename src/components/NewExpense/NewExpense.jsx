import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

   function onSaveExpenseDataHandler (enteredExpenseData){

    const expenseData = {

        ...enteredExpenseData,
        id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
   };
   
    return (
        <div className="new-expense">

        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/> 

        </div>
    )
}

export default NewExpense;
