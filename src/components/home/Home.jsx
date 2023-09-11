import React from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Form />
        {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}
        <Result />
      </div>
    </>
  );
};

export default Home;
