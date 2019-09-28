import React from 'react';

const RadioSearchButton = ({
  buttonName,
  buttonValue,
  checkedValue,
  optionChange
}) => {
  return (
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="search-type"
          value={buttonValue}
          checked={checkedValue}
          onChange={optionChange}
          className="form-check-input"
        />
        {` ${buttonName}`}
      </label>
    </div>
  );
};

export default RadioSearchButton;
