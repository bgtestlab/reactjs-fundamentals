import Button from "./Button";
import styles from "./App.module.css";

import { useEffect, useState } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("i run all the time");

//   useEffect(() => {
//     console.log("CALL THE API");
//   }, []);
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log("SEARCH FOR", keyword);
//     }
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run only counter changes");
//   }, [counter]);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

export default App;
