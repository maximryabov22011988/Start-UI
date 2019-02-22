import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const isInvalid = function ({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched;
};

const Textarea = props => {
  const {
    label,
    className,
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

  const htmlFor = `${label}-${Math.round(Math.random() * 10000)}`;

  return (
    <div className={classes}>
      <label className={`${defaultClass}__label`} htmlFor={htmlFor}>{props.label}</label>
      <textarea
        className={`${defaultClass}__textarea`}
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

Textarea.defaultProps = {
  label: 'Message',
  errorMessage: '',
  disabled: false,
};

Textarea.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  shouldValidate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
