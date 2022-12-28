import Expenses from "./components/Expenses/Expenses";

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
     
     <Expenses items={expenses}></Expenses>

    </div>
    
  );
}

export default App;
