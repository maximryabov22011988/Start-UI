import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const SelectionPanel = props => {
  const {
    label,
    parentClass,
    value,
    onToggleOn,
    disabled,
  } = props;

  const htmlFor = `button-${Math.round(Math.random() * 10000)}`;

  return (
    <React.Fragment>
      <label className={`${parentClass}__label`} htmlFor={htmlFor}>{props.label}</label>
      <input
        className={`${parentClass}__panel`}
        type="button"
        id={htmlFor}
        value={value}
        onClick={onToggleOn}
        disabled={disabled}
      />
      <span className={`${parentClass}__icon`} />
    </React.Fragment>
  );
};

SelectionPanel.defaultProps = {

};

SelectionPanel.propTypes = {

};

export default SelectionPanel;
