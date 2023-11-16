import { useContext } from "react";
import ThemeContext from "./context";

// function ContextChild() {
//   return (
//     <ThemeContext.Consumer>
//       {value => {
//         return (<div>{ value }</div>)
//       }}
//     </ThemeContext.Consumer>
//   )
// }

function ContextChild() {
  const themeObj = useContext(ThemeContext);
  return (
    <div style={themeObj}>aaa</div>
  )
}

export default ContextChild;
