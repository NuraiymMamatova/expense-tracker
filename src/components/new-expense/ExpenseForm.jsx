import React, { useState } from "react";
import FormInput from "../UI/input/FormInput";
import Button from "../UI/button/Button";

const arrayForDisable = new Map();
const ExpenseForm = ({ onCloseForm, onAddNewExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  let dataForCheck;
  const titleChangeHandler = (e) => {
    dataForCheck = e.target.value;
    setTitle(dataForCheck);
    if (dataForCheck) {
      arrayForDisable.set("title", false);
      checkAllInputs();
    }
  };

  const amountChangeHandler = (e) => {
    dataForCheck = e.target.value;
    setAmount(dataForCheck);
    if (dataForCheck) {
      arrayForDisable.set("amount", false);
      checkAllInputs();
    }
  };

  const dateChangeHandler = (e) => {
    dataForCheck = e.target.value;
    setDate(dataForCheck);

    if (dataForCheck) {
      arrayForDisable.set(" ", false);
      checkAllInputs();
    }
  };

  function checkAllInputs() {
    const arrayValues = [...arrayForDisable.values()];
    if (
      arrayForDisable.size === 3 &&
      arrayValues.every((value) => value === false)
    ) {
      setIsDisabled(false);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount || !date) {
      return alert("Все поля должны быть заполнены!");
    }

    const expense = {
      date: new Date(date),
      title,
      amount,
    };

    onAddNewExpense(expense);

    setTitle("");
    setAmount(0);
    setDate("");
    onCloseForm();
  };

  return (
    <form>
      <FormInput
        label={"Заголовок"}
        inputType="text"
        onChange={titleChangeHandler}
        value={title}
        className={title ? "" : "error"}
      />
      <FormInput
        label={"Количество"}
        inputType="number"
        onChange={amountChangeHandler}
        value={amount}
        className={amount ? "" : "error"}
      />
      <FormInput
        label={"Датировать"}
        inputType="date"
        onChange={dateChangeHandler}
        value={date}
        className={date ? "" : "error"}
      />
      <div>
        <Button type="button" onClick={onCloseForm}>
          Отмена
        </Button>
        <Button
          isDisabled={isDisabled}
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          Добавить расходы
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
