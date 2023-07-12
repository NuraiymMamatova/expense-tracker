import { useState } from "react";
import "./App.css";
import NewExpense from "./components/new-expense/NewExpense";
import Expenses from "./components/expenses/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    { date: "08/14/2023", title: "туалетная бумага", amount: 90 },
    { date: "09/14/2023", title: "туалетная бумага", amount: 90 },
  ]);

  const addNewExpenseHandler = (NewExpense = {}) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, NewExpense];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

// hook это функция  всегда use деген префикс менен башталат эгерде use менен башталган функция болсо ал hook болуп эсептелет
