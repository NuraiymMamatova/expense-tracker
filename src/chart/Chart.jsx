import React from "react";
import ChartBar from "./ChartBar";
import { styled } from "styled-components";

const Chart = ({ dataPoits }) => {
  const dataPointsValues = dataPoits.map((data) => data.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <StyledChart>
      {dataPoits.map((point) => {
        return (
          <ChartBar
            key={point.label}
            label={point.label}
            value={point.value}
            totalMax={totalMax}
          />
        );
      })}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
