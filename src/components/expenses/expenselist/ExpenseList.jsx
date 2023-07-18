import React from "react";
import ExpenseItem from "../expenseitem/ExpenseItem";
import { styled } from "styled-components";

const ExpenseList = ({ expenses = [] }) => {
  return (
    <StyledExpenseList>
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </StyledExpenseList>
  );
};

export default ExpenseList;

const StyledExpenseList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 95%;
  justify-self: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 0px;
`;
