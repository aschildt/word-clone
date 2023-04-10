import React from "react";

function RenderGuesses({guesses}) {
  return <div>
    {guesses.map((g, i) => <p key={i} className="guess">{g}</p>)}
  </div>
}

export default RenderGuesses;
