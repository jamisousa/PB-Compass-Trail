import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Car insurance', amount: 294.67, date: new Date(2021,2,15)},
  {id: 'e2', title: 'New tv', amount: 155.25, date: new Date(2021,3,25)},
  {id: 'e3', title: 'Wooden desk', amount: 205.28, date: new Date(2022,1,30)},
  {id: 'e4', title: 'New bike', amount: 144.99, date: new Date(2021,5,2)}
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;