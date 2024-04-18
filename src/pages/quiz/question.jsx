import React from "react";
import Options from "./options";
import './style.css'

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
  return (
    <>
      <h3 className="questionId">Question {question.id}</h3>
      <h5 className="question">{question.question}</h5>
      <form onSubmit={onSubmit} className="mt-2 mb-2">
        <Options
          options={question.options}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <button type="submit" className="submitButton">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Question;
