import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const Radio = props => {
  const {
    label,
    className,
    type,
    value,
    checked,
    disabled,
    onChange,
    helpText,
  } = props;

  const defaultClass = 'radio';
  const classes = classNames(
    defaultClass,
    className,
    (type === 'custom') && `${defaultClass}--custom`,
    disabled && `${defaultClass}--disabled`,
  );

  return (
    <div className={classes}>
      <label className={`${defaultClass}__label`}>
        <input
          className={`${defaultClass}__default-radio`}
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />

        { type === 'custom'
          && <span className={`${defaultClass}__custom-radio`}></span>
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

Radio.defaultProps = {
  label: 'Radio',
  type: 'default',
  value: 'Radio',
  checked: false,
  disabled: false,
  helpText: '',
};

Radio.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  helpText: PropTypes.string,
};

export default Radio;
