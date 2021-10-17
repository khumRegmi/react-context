import React, { useContext } from "react";
import { ThemeContext } from "./App";

const ColorChange2 = () => {
  const { darkTheme, text } = useContext(ThemeContext);
  //   const text = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: !darkTheme ? "#333" : "#CCC",
    padding: "35px",
    border: "black solid",
    width: "300px",
    marginTop: "20px",
  };

  return (
    <div style={themeStyle}>
      <p>The background is light, and it is {text} </p>
    </div>
  );
};

export default ColorChange2;
