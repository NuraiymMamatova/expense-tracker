import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/button/Button";

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
    <div className="newExpenseDiv">
      {isFormShow ? (
        <ExpenseForm
          onCloseForm={closeFormHandler}
          onAddNewExpense={onAddNewExpense}
        />
      ) : (
        <Button onClick={showFromHandler}>Добавить новый расход</Button>
      )}
    </div>
  );
};

export default NewExpense;
