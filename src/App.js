import { useState } from "react";
import "./App.css";
import NewExpense from "./components/new-expense/NewExpense";
import Expenses from "./components/expenses/expenses/Expenses";
import { styled } from "styled-components";

const EXPENSES = [
  {
    id: "e1",
    title: "Food",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Playstation 5",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addNewExpenseHandler = (NewExpense = {}) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, NewExpense];
    });
  };

  return (
    <StyledApp>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  padding: 100px 0px;
  background-color: #3f3f3f;
`;

// hook это функция  всегда use деген префикс менен башталат эгерде use менен башталган функция болсо ал hook болуп эсептелет
