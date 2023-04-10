import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({string, answer}) {
  const result = checkGuess(string, answer)

  return <p className="guess">
    {range(5).map(i => (
      <span className={"cell".concat(result ? (" ".concat(result[i].status)) : '')} key={i}>{result ? result[i].letter : undefined}</span>
    ))}
  </p>;
}

export default Guess;
