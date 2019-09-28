import React from 'react';

const CheckboxButton = ({
  buttonName,
  buttonValue,
  checkedValue,
  optionChange
}) => {
  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name="pokemon-type"
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

export default CheckboxButton;
