import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const NewExpense = ({ onAddNewExpense }) => {
  const [isFormShow, setIsFormShow] = useState(false);

  const showFromHandler = () => {
    setIsFormShow(true);
    // setState((prevState) => {
    //   return !prevState;
    // });
    // setState(false);
    // setState({});
  };

  const closeFormHandler = () => setIsFormShow(false);

  return (
    <StyledNewExpenseDiv>
      {isFormShow ? (
        <ExpenseForm
          onCloseForm={closeFormHandler}
          onAddNewExpense={onAddNewExpense}
        />
      ) : (
        <Button onClick={showFromHandler}>Добавить новый расход</Button>
      )}
    </StyledNewExpenseDiv>
  );
};

export default NewExpense;

const StyledNewExpenseDiv = styled.div`
  background: #ad9be9;
  padding: 20px;
  width: 70%;
  justify-content: center;
  display: flex;
  border-radius: 12px;
  align-self: center;
`;
