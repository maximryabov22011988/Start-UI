import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const Toggle = props => {
  const {
    className,
    valueOn,
    valueOff,
    isToggle,
    disabled,
    onToggle,
  } = props;

  const defaultClass = 'toggle';
  const classes = classNames(
    defaultClass,
    className,
    disabled && `${defaultClass}--disabled`,
  );

  return (
    <div className={classes}>
      <label className={`${defaultClass}__label`}>
        <input
          className={`${defaultClass}__default-checkbox`}
          type="checkbox"
          onChange={onToggle}
          disabled={disabled}
        />
        <span className={`${defaultClass}__label-text`}>
          {isToggle ? valueOn : valueOff}
        </span>
      </label>
    </div>
  );
};

Toggle.defaultProps = {
  isToggle: false,
  disabled: false,
};

Toggle.propTypes = {
  classes: PropTypes.string,
  valueOn: PropTypes.string,
  valueOff: PropTypes.string,
  isToggle: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;
