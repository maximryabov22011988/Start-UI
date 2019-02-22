import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const MenuToggle = props => {
  const {
    label,
    className,
    disabled,
    onToggle,
    isActive
  } = props;

  const defaultClass = 'menu-toggle';
  const classes = classNames(
    defaultClass,
    className,
    isActive && `${defaultClass}--active`,
  );

  return (
    <button className={classes} disabled={disabled} onClick={onToggle}>
      <div className={`${defaultClass}__burger`}>
        <span />
        <span />
        <span />
      </div>
      {
        label
        && <span className={`${defaultClass}__text`}>{label}</span>
      }
    </button>
  );
};

MenuToggle.defaultProps = {
  disabled: false,
  isActive: false,
};

MenuToggle.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  isActive: PropTypes.bool,
};

export default MenuToggle;
