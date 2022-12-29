import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
      if(expense.date.getFullYear().toString() === filteredYear){
        return true;
      }else{
        return false;
      }
  });


  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      
      <ExpensesList items={filteredExpenses}></ExpensesList>

    </Card>
    </div>
  );
}

export default Expenses;