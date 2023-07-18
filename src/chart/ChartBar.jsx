import React from "react";
import { styled } from "styled-components";

const ChartBar = ({ label, value, totalMax }) => {
  let barFillHeight = "0%";
  if (totalMax > 0) {
    barFillHeight = Math.round((value / totalMax) * 100) + "%";
  }
  // 94 / 1064 * 100

  return (
    <StyledChartBar>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </StyledChartBar>
  );
};

export default ChartBar;

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .chart-bar__inner {
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & > .chart-bar__fill {
      background-color: #4826b9;
      width: 100%;
      transition: all 0.3s ease-out;
    }
  }

  & > .chart-bar__label {
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
  }
`;
