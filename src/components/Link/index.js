import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const Link = props => {
  const {
    className,
    href,
    type,
    disabled
  } = props;

  const defaultClass = 'link';
  const classes = classNames(
    type === 'text' && defaultClass,
    type === 'button' && 'btn',
    className,
    disabled && type === 'button' && 'btn--disabled',
  );

  return (
    <a className={classes} href={href}>
      {props.children}
    </a>
  );
};

Link.defaultProps = {
  disabled: false,
};

Link.propTypes = {
  classes: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Link;
