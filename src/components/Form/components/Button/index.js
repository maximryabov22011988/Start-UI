import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = props => {
  const {
    className,
    type,
    disabled,
    onClick
  } = props;

  const defaultClass = 'btn';
  const classes = classNames(
    defaultClass,
    className,
  );

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
);
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
