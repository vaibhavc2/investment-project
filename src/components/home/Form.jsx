import React, { useState } from "react";
import submitHandler from "../../functions/submitHandler";
import resetHandler from "../../functions/resetHandler";
import inputChangeHandler from "../../functions/inputChangeHandler";

const Form = () => {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlyContribution, setYearlyContribution] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [duration, setDuration] = useState(10);

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings (₹)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(e) =>
                inputChangeHandler("current-savings", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(e) =>
                inputChangeHandler("yearly-contribution", e.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(e) =>
                inputChangeHandler("expected-return", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(e) => inputChangeHandler("duration", e.target.value)}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;
