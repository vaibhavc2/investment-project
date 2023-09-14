import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

const Home = () => {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

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
    // console.log(yearlyData);
    setResults(yearlyData);
  };

  return (
    <>
      <div>
        <Header />
        <Form onCalculate={calculateHandler} />
        {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}
        <Result yearlyData={results} />
      </div>
    </>
  );
};

export default Home;
