import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import ResultsTable from "./ResultsTable";

const Home = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    // The + sign before userInput is used to typecast or convert the values retrieved from the userInput object to numbers.

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <>
      <div>
        <Header />
        <Form onCalculate={calculateHandler} />
        {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}

        {!userInput && <p>No Investment calculated yet!</p>}
        {userInput && <ResultsTable yearlyData={yearlyData} />}
      </div>
    </>
  );
};

export default Home;
