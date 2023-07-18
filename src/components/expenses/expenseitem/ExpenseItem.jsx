import React from "react";
import { styled } from "styled-components";

const ExpenseItem = ({ date, title, amount }) => {
  function getUpperLetter(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

  let newDate = new Date(date);

  return (
    <StyledExpenseItem>
      <div>
        <div>
          <p>
            {getUpperLetter(newDate.toLocaleString("ru-ru", { month: "long" }))}
          </p>
          <p>{newDate.getFullYear()}</p>
          <p>{newDate.getDate()}</p>
        </div>
        <p>{getUpperLetter(title)}</p>
      </div>
      <p>$ {String(amount).padEnd(4, ",00")}</p>
    </StyledExpenseItem>
  );
};

export default ExpenseItem;

const StyledExpenseItem = styled.div`
  color: #ffffff;
  background-color: #4b4b4b;
  border-radius: 12px;
  height: 17vh;
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;

    & + p {
      border-radius: 10px;
      border: 1px solid #fff;
      background: #40005d;
      padding: 10px 18px;
      height: 43px;
    }

    & > div {
      text-align: center;
      width: 82.114px;
      height: 80px;
      border-radius: 10px;
      border: 1px solid #fff;
      background: #2a2a2a;
    }
  }
`;
