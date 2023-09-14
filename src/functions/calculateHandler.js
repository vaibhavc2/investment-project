const calculateHandler = (userInput) => {
  const yearlyData = []; // per-year results

  let currentSavings = +userInput["current-savings"];
  const yearlyContribution = +userInput["yearly-contribution"];
  const expectedReturn = +userInput["expected-return"] / 100;
  const duration = +userInput["duration"];

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution
    });
  }

  // do something with yearlyData ...
};

export default calculateHandler;
