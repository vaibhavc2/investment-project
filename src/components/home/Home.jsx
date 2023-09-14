import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import calculateHandler from "./functions/calculateHandler";

const Home = () => {
  const [results, setResults] = useState(null);

  return (
    <>
      <div>
        <Header />
        <Form onCalculate={calculateHandler} />
        {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}
        <Result />
      </div>
    </>
  );
};

export default Home;
