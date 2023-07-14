import React from "react";
import "../expenseitem/ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  function getUpperLetter(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

  let newDate = new Date(date);

  return (
    <li>
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
    </li>
  );
};

export default ExpenseItem;
