import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function RenderGuesses({guesses, answer}) {
  return <div>
    {range(NUM_OF_GUESSES_ALLOWED).map(i =>
      <Guess key={i} string={guesses[i]} answer={answer}/>
    )}
  </div>
}

export default RenderGuesses;
