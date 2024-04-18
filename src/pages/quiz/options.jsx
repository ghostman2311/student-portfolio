import React from 'react';
import './style.css'

const Options = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className='options'>
      {options.map((option, index) => (
        <div key={index} className='optionsChecked' >
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
            className="check-input"
          />
          <label className="label">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Options;
