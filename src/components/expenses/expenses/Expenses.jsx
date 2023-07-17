import React, { useState } from "react";
import ExpenseList from "../expenselist/ExpenseList";
import "./Expenses.css";
import ExpesnsesFilter from "../ExpensesFilter";
import ExpensesChart from "../ExpensesChart";

const Expenses = ({ expenses = [] }) => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedSort, setSelectedSort] = useState("");

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

  if (selectedSort === "по названию") {
    renderedExpenses.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
  }

  return (
    <div className="expenses">
      <ExpesnsesFilter
        selectedYear={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <ExpensesChart expenses={renderedExpenses} />
      <ExpenseList expenses={renderedExpenses} />
    </div>
  );
};

export default Expenses;
