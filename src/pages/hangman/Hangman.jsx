import React, { useState } from "react";
import { randomWord } from "../../utility";
import "./style.css";

const Hangman = ({ maxWrong = 6, images }) => {
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState(new Set([]));
  const [answer, setAnswer] = useState(randomWord());

  const handleGuess = (e) => {
    let letter = e.target.value;
    setGuessed((prevGuessed) => new Set([...prevGuessed, letter]));
    setMistake(
      (prevMistake) => prevMistake + (answer.includes(letter) ? 0 : 1)
    );
  };

  const guessedWord = () => {
    return answer
      .split("")
      .map((letter) => (guessed.has(letter) ? letter : "  _____  "));
  };

  const generateButtons = () => {
    return "abcdefghjklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        className="genrateButton"
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  };

  const resetButton = () => {
    setMistake(0);
    setGuessed(new Set([]));
    setAnswer(randomWord());
  };

  const gameOver = mistake >= maxWrong;
  const isWinner = guessedWord().join("") === answer;
  let gameStat = generateButtons();

  if (isWinner) {
    gameStat = <h2>You Won!!!</h2>;
  }

  if (gameOver) {
    gameStat = <h2>You Lost!!!</h2>;
  }

  return (
    <div className="hangmanContainer">
      <h1 className="text-center">Hangman</h1>
      <div className="float-right">
        Wrong Guesses: {mistake} of {maxWrong}
      </div>
      <div className="text-center">
        <img src={images[mistake]} alt="" />
      </div>
      <div className="optionContainer">
        <p className="heading">Guess the Programming Language:</p>
        <div className="solution">
          {!gameOver ? guessedWord() : <p className="heading">{answer}</p>}
        </div>
        <div className="gameStat"> {gameStat}</div>
        <button className="reset" onClick={resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Hangman;
