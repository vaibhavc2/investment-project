const inputChangeHandler = (input, value, setUserInput) => {
  setUserInput((prevInput) => ({
    ...prevInput,
    [input]: value
  }));
};

export default inputChangeHandler;
