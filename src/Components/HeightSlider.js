import React from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const wrapperStyle = { width: 250, margin: 0 };

const HeightSlider = ({ values, sliderChange }) => {
  return (
    <div style={wrapperStyle}>
      <Range
        min={0}
        max={7}
        step={0.1}
        defaultValue={[values.min, values.max]}
        tipFormatter={value => `${value} m`}
        onChange={sliderChange}
      />
    </div>
  );
};

export default HeightSlider;
