import React from "react";
import ExpenseItem from "../expenseitem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ expenses = [] }) => {
  return (
    <ul>
      {expenses.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
