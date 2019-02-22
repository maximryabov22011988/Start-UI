import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const Checkbox = props => {
  const {
    label,
    className,
    type,
    disabled,
    onCheck,
    helpText,
  } = props;

  const defaultClass = 'checkbox';
  const classes = classNames(
    defaultClass,
    className,
    (type === 'custom') && `${defaultClass}--custom`,
    disabled && `${defaultClass}--disabled`,
  );

  const customCheckbox = (
    <svg
      className={`${defaultClass}__custom-checkbox`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
      <polyline points="1 9 7 14 15 4" />
    </svg>
  );

  return (
    <div className={classes}>
      <label className={`${defaultClass}__label`}>
        <input
          className={`${defaultClass}__default-checkbox`}
          type="checkbox"
          onChange={onCheck}
          disabled={disabled}
        />

        { type === 'custom'
          && customCheckbox
        }

        <span className={`${defaultClass}__label-text`}>{props.label}</span>
      </label>
      {
        helpText
        && <div className={`${defaultClass}__help-text`}>{helpText}</div>
      }
    </div>
  );
};

Checkbox.defaultProps = {
  label: 'Checkbox',
  type: 'default',
  disabled: false,
  helpText: '',
};

Checkbox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  helpText: PropTypes.string,
};

export default Checkbox;
