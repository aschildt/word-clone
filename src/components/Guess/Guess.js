import React from "react";
import { range } from "../../utils";

function Guess({string}) {
  console.log('Guess', string)
  return <p className="guess">
    {range(5).map(i => (
      <span className="cell" key={i}>{string ? string[i] : undefined}</span>
    ))}
  </p>;
}

export default Guess;
