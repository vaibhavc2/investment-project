import React, { useState } from "react";
import inputChangeHandler from "../../functions/inputChangeHandler";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1000,
  "expected-return": 12,
  duration: 10
};

const Form = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onCalculate(userInput);
  };

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
                inputChangeHandler(
                  "current-savings",
                  e.target.value,
                  setUserInput
                )
              }
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(e) =>
                inputChangeHandler(
                  "yearly-contribution",
                  e.target.value,
                  setUserInput
                )
              }
              value={userInput["yearly-contribution"]}
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
                inputChangeHandler(
                  "expected-return",
                  e.target.value,
                  setUserInput
                )
              }
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(e) =>
                inputChangeHandler("duration", e.target.value, setUserInput)
              }
              value={userInput.duration}
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
export { initialUserInput };
