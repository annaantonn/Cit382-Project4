import "./styles.css";

import { useState } from "react";
let nextId = 0;

function Description() {
  return (
    <div>
      <h4>Dsecription:</h4>
      <p>
        Generate random number between 1 and 100 (inclusive)
        <br />
        Display sorted list of generated random numbers
        <br />
        Dispaly statistical information about numbers
        <br />
        Clear numbers.
      </p>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h4>Statistics</h4>
      <p>Count: , Average: , Min: , Max: , Median: </p>
    </div>
  );
}

/*function Data() {
  return <h4>Data</h4>;
}*/

const RandomNumbers = () => {
  const [num, setNum] = useState(0);
  const [number, setNumber] = useState([]);

  function Data() {
    return <h4>Data</h4>;
  }

  function getNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  const handleClick = () => {
    setNum(getNum(1, 100));
  };

  function clearNum() {
    return number();
  }

  /*const removeNumber = (index) => {
    setNumber([
      ...numbers.slice(0, index),
      ...numbers.slice(index + 1, numbers.length)
    ]);
  }*/

  return (
    <div>
      <Description />
      <div>
        <>
          <input value={num} onChange={(e) => setNum(e.target.value)} />
          <button
            onClick={() => {
              setNum(getNum(1, 100));
              setNumber([...number, { id: nextId++, num: num }]);
            }}
          >
            Generate Number
          </button>
        </>
      </div>
      <button onClick={handleClick}>Generate Number</button>
      <button>Clear Number</button>
      <Statistics />
      <Data />
      <ul>
        {number.map((number) => (
          <li key={number.id}>{number.num}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>CIT382 - 22W</h1>
      <h2>Project 4</h2>
      <RandomNumbers />
    </div>
  );
}
