import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {id: 'e1', title: 'Car insurance', amount: 294.67, date: new Date(2021,2,15)},
    {id: 'e2', title: 'Car insurance', amount: 155.25, date: new Date(2021,3,25)},
    {id: 'e3', title: 'Car insurance', amount: 205.28, date: new Date(2022,1,30)},
    {id: 'e4', title: 'Car insurance', amount: 144.99, date: new Date(2021,5,2)}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
        ></ExpenseItem>

      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
        ></ExpenseItem>

      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
        ></ExpenseItem>

      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}
        ></ExpenseItem>

    </div>
    
    
  );
}

export default App;
