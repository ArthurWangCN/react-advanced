import { useState } from "react";
import ThemeContext from "./context";
import ContextChild from './child';

function ContextFather() {
  const provideMsg = 'provide a message';
  const [theme, setTheme] = useState({ color: 'red' });
  return (
    <ThemeContext.Provider value={theme}>
      <ContextChild />
      <button onClick={() => setTheme({color: 'green'})}>change color</button>
    </ThemeContext.Provider>
  )
}

export default ContextFather;