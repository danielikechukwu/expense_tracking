import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    // const initialText = '';

    const[enteredTitle, setTitle] = useState('');

    const[enteredAmount, setAmount] = useState('');

    const[enteredDate, setDate] = useState('');

    // const[title, setTitle] = useState('');

    // const[amount, setAmount] = useState('');

    // const[date, setDate] = useState('');

// const[userInput, setUserInput] = useState({
//     title: '',
//     amount:'',
//     date: ''
// })

    function titleChangeHandler (event) {

        setTitle(event.target.value);

    };

    function amountChangeHandler(event){

        setAmount(event.target.value);


    };

    function dateChangeHandler(event){

        setDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTDate: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return{
        //         ...prevState, enteredDate: event.target.value
        //     }
        // })

    };
    
function submitHandler(e) {

    e.preventDefault();

    const expenseData = {

        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData)
    setTitle('');
    setAmount('');
    setDate('');

    console.log(expenseData)

};

    return (

        <form onSubmit={submitHandler}>

          <div className='new-expense__controls'>

              <div className='new-expense__control'>
                  <label htmlFor="">Title</label>
                  <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>

              </div>

              <div className='new-expense__control'>
                  <label htmlFor="">Amount</label>
                  <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />

              </div>

              <div className='new-expense__control'>
                  <label htmlFor="">Date</label>
                  <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>

              </div>

            </div>  

            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
