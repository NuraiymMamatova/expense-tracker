import React from "react";
import "./ExpensesFilter.css";
import Button from "../UI/button/Button";

const ExpesnsesFilter = ({ selectedYear, onSelectedYearChange, selectedSort, setSelectedSort }) => {
  const onClickGetValueFromButton = (event) => {
    console.log("in expense filter onclick get value from button", event.target.value)
    
    setSelectedSort(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="sorting">
          <Button onClick={onClickGetValueFromButton} className="esc" value="по возрастанию">
            по возрастанию
          </Button>
          <Button onClick={onClickGetValueFromButton} className="desc" value="по убыванию">
            по убыванию
          </Button>
          <Button onClick={onClickGetValueFromButton} value="по новизне">по новизне</Button>
          <Button onClick={onClickGetValueFromButton} value="по названию">по названию</Button>
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
