import React, { useState } from "react";
import ExpenseList from "../expenselist/ExpenseList";
import "./Expenses.css";
import ExpesnsesFilter from "../ExpensesFilter";

const Expenses = ({ expenses = [] }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const selectedYearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === selectedYear) {
      return true;
    }
    return false;
  });
  
  const renderedExpenses = selectedYear === "All" ? expenses : filteredExpenses;

  return (
    <div className="expenses">
      {/* div => Card */}
      <ExpesnsesFilter
        selectedYear={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
      />
      <ExpenseList expenses={renderedExpenses} />
    </div>
  );
};

export default Expenses;
