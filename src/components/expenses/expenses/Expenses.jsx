import React from "react";
import ExpenseList from "../expenselist/ExpenseList";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
