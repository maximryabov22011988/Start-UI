import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';
import closeIcon from './images/icon-close.svg';

const Close = props => {
  const {
    className,
    label,
    disabled,
    reverse,
    onClick
  } = props;

  const defaultClass = 'btn-close';
  const classes = classNames(
    defaultClass,
    className,
    reverse && `${defaultClass}--reverse`
  );

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      <img className="btn-close__icon" src={closeIcon} width="16" height="16" alt=""/>
      {
        label
        && <span className="btn-close__text">{label}</span>
      }
    </button>
  );
};

Close.defaultProps = {
  disabled: false,
  reverse: false,
};

Close.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  reverse: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Close;
