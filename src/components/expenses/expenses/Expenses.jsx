import React, { useState } from "react";
import ExpenseList from "../expenselist/ExpenseList";
import ExpesnsesFilter from "../ExpensesFilter";
import ExpensesChart from "../ExpensesChart";
import { styled } from "styled-components";

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
  } else if (selectedSort === "по новизне") {
    renderedExpenses.sort((a, b) => b.date - a.date);
  } else if (selectedSort === "по убыванию") {
    renderedExpenses.sort((a, b) => a.amount - b.amount).reverse();
  } else if (selectedSort === "по возрастанию") {
    renderedExpenses.sort((a, b) => a.amount - b.amount);
  }

  return (
    <StyledExpenses>
      <ExpesnsesFilter
        selectedYear={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <ExpensesChart expenses={renderedExpenses} />
      <ExpenseList expenses={renderedExpenses} />
    </StyledExpenses>
  );
};

export default Expenses;

const StyledExpenses = styled.div`
  border-radius: 12px;
  background: #1f1f1f;
  width: 70%;
  display: grid;
  align-self: center;
  padding: 30px;
`;
