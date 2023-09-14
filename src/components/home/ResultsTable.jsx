import React from "react";
import { initialUserInput } from "./Form";
import { v4 as uuidv4 } from "uuid";
import { currencyFormatFunction } from "../../functions/currencyFormatter";
import { result } from "../../styles/ResultsTable.module.css";

const ResultsTable = ({ yearlyData }) => {
  const initialInvestment = initialUserInput["current-savings"];

  return (
    <>
      <table className={result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((i) => (
            <tr key={uuidv4()}>
              <td key={uuidv4()}>{i.year}</td>
              <td key={uuidv4()}>
                {currencyFormatFunction(i.savingsEndOfYear)}
              </td>
              <td key={uuidv4()}>{currencyFormatFunction(i.yearlyInterest)}</td>
              <td key={uuidv4()}>
                {currencyFormatFunction(
                  i.savingsEndOfYear -
                    initialInvestment -
                    i.yearlyContribution * i.year
                )}
              </td>
              <td key={uuidv4()}>
                {currencyFormatFunction(
                  initialInvestment + i.yearlyContribution * i.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ResultsTable;
