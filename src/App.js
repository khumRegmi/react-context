import "./App.css";
import React, { useState } from "react";
import ColorChange1 from "./ColorChange1";
import ColorChange2 from "./ColorChange2";
export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [text, setText] = useState("True");

  function toggle() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    setText(darkTheme ? "False" : "True");
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, text }}>
      <div className="App">
        <button onClick={toggle}> Toggle </button>
        <ColorChange1 />
        <ColorChange2 />
      </div>
    </ThemeContext.Provider>
  );
}
