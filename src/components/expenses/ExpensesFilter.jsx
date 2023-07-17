import React, { useState } from "react";
import "./ExpensesFilter.css";
import Button from "../UI/button/Button";

const ExpesnsesFilter = ({
  selectedYear,
  onSelectedYearChange,
  setSelectedSort,
}) => {
  const [
    isEscButtonShowAndHideDescButton,
    setIsEscButtonShowAndHideDescButton,
  ] = useState(false);
  const onClickGetValueFromButton = (event) => {
    const buttonValue = event.target.value;
    console.log(
      "in expense filter onclick get value from button",
      buttonValue
    );

    if (buttonValue === "по возрастанию") {
      setIsEscButtonShowAndHideDescButton(false);
    } else if (buttonValue === "по убыванию") {
      setIsEscButtonShowAndHideDescButton(true);
    }

    setSelectedSort(buttonValue);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="sorting">
          <Button
            onClick={onClickGetValueFromButton}
            className={isEscButtonShowAndHideDescButton ? "" : "hide-button"}
            value="по возрастанию"
          >
            по возрастанию
          </Button>
          <Button
            onClick={onClickGetValueFromButton}
            className={!isEscButtonShowAndHideDescButton ? "" : "hide-button"}
            value="по убыванию"
          >
            по убыванию
          </Button>
          <Button onClick={onClickGetValueFromButton} value="по новизне">
            по новизне
          </Button>
          <Button onClick={onClickGetValueFromButton} value="по названию">
            по названию
          </Button>
        </div>
        <select
          id="filter"
          value={selectedYear}
          onChange={onSelectedYearChange}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpesnsesFilter;
