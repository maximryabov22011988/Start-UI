import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const isInvalid = function ({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched;
};

const Field = props => {
  const {
    label,
    className,
    type,
    value,
    disabled,
    onChange,
    errorMessage
  } = props;

  const defaultClass = 'field';
  const classes = classNames(
    defaultClass,
    className,
    isInvalid(props) && `${defaultClass}--invalid`,
    disabled && `${defaultClass}--disabled`,
  );

  const htmlFor = `${type}-${Math.round(Math.random() * 10000)}`;

  return (
    <div className={classes}>
      <label className={`${defaultClass}__label`} htmlFor={htmlFor}>{props.label}</label>
      <input
        className={`${defaultClass}__input`}
        type={type}
        id={htmlFor}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />

      {
        isInvalid(props)
          ? <span className={`${defaultClass}__message`}>{errorMessage}</span>
          : null
      }
    </div>
  );
};

Field.defaultProps = {
  label: 'Label',
  type: 'text',
  errorMessage: 'Enter the correct value',
  disabled: false,
};

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  classes: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  shouldValidate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Field;
