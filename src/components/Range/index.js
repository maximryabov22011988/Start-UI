import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const Range = props => {
  const {
    className,
    minValue,
    maxValue,
    step,
    startValue,
    disabled,
    onChange,
  } = props;

  const defaultClass = 'range';
  const classes = classNames(
    defaultClass,
    className,
    disabled && `${defaultClass}--disabled`,
  );

  return (
    <div className={classes}>
      <label className={`${defaultClass}__label`}>
        <input
          className={`${defaultClass}__input`}
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          value={startValue}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
    </div>
  );
};

Range.defaultProps = {
  minValue: 0,
  maxValue: 100,
  step: 1,
  startValue: '50',
  disabled: false,
};

Range.propTypes = {
  classes: PropTypes.string,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  step: PropTypes.number,
  startValue: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Range;
