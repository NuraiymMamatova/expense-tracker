import React, { useState } from "react";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

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

    if (buttonValue === "по возрастанию") {
      setIsEscButtonShowAndHideDescButton(false);
    } else if (buttonValue === "по убыванию") {
      setIsEscButtonShowAndHideDescButton(true);
    }

    setSelectedSort(buttonValue);
  };
  return (
    <StyledExpenseFilter>
      <div>
        <div>
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
        <select value={selectedYear} onChange={onSelectedYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </select>
      </div>
    </StyledExpenseFilter>
  );
};

export default ExpesnsesFilter;

const StyledExpenseFilter = styled.div`
  color: white;
  padding: 0 1rem;
  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    & > div {
      display: flex;
      gap: 10px;
      & > button {
        background-color: white;
        color: #222222;
        font-weight: 600;
      }
    }
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }

  .hide-button {
    display: none;
  }
`;
