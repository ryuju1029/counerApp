import React, { useState, useEffect } from 'react';

function CountApp() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  useEffect(() => {
    console.log("Add count")
  }, [count])

  useEffect(() => {
    console.log("Add count2")
  }, [count2])

  return (
    <>
      <h1>Counter</h1>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ number1</button>
      <h2>count2: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>+ number2</button>
    </>
  );
}

export default CountApp;