import React from "react";

function GuessInput() {
  const [input, setInput] = React.useState('')

  return (
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault()
      if (input.length !== 5) {
        alert('Your guess must have exactly 5 letters')
      } else if (input.length === 5){
        console.log('GUESS:', input)
      }
    }}>
    <label htmlFor="guess-input">
    Enter guess:
    </label>
      <input id="guess-input" type="text" value={input} onChange={event => {
        const uppercaseInput = event.target.value.toUpperCase()
        setInput(uppercaseInput)}}/>
    </form>
  );
}

export default GuessInput;
