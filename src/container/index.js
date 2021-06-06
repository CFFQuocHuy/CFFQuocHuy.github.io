// var react = require("React");
import React, { useEffect, useState } from "react";

// arrow function ( fat function )

// function useState(initialValue) {
//   return [state, setState];
// }

function Counter() {
  // spread operator
  // _

  //(1) (firstMount)
  //not running (secondMount)
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((preState) => preState + 1);

  function autoIncrease() {
    setCount(count + 1);
  }

  //(3) DID mount, END LIFECYLE i (firstMount)
  //(2) DID update (secondMount)
  useEffect(() => {
    //
    // const timerID = setInterval(() => autoIncrease(), 1000);
    return () => {
      console.log("unmount 2");
    };
  }, []);

  //(2) (firstMount)
  //(1) secondMount
  return (
    <div>
      {console.log("render 1")}
      <button onClick={increaseCount}>increase ONE</button>
      <div>{count}</div>
    </div>
  );
}

// USE MEMO, CALL BACK
export default React.memo(Counter);
export { Counter };
