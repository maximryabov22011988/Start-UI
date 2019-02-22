import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SelectionPanel from './components/SelectionPanel';
import OptionList from './components/OptionList';

import './styles.scss';

const Select = props => {
  const {
    label,
    className,
    value,
    options,
    isOpen,
    disabled,
    onToggleOn,
    onSelectItem,
  } = props;

  const defaultClass = 'select';
  const classes = classNames(
    defaultClass,
    className,
    isOpen && `${defaultClass}--open`,
    disabled && `${defaultClass}--disabled`,
  );

  return (
    <div className={classes}>
      <SelectionPanel
        parentClass={defaultClass}
        label={label}
        value={value}
        onToggleOn={onToggleOn}
        disabled={disabled}
      />
      <OptionList
        parentClass={defaultClass}
        options={options}
        onSelectItem={onSelectItem}
      />
    </div>
  );
};

Select.defaultProps = {

};

Select.propTypes = {

};

export default Select;

/*const Select = props => {
  const {
    label,
    className,
    type,
    value,
    disabled,
    onChange,
  } = props;

  const defaultClass = 'select';
  const classes = classNames(
    defaultClass,
    className,
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
      <span className={`${defaultClass}__icon`} />
      <ul className={`${defaultClass}__list`}>
        <li className={`${defaultClass}__item`} tabIndex={0}>
          Russia
        </li>
        <li className={`${defaultClass}__item`} tabIndex={0}>
          France
        </li>
        <li className={`${defaultClass}__item`} tabIndex={0}>
          Japan
        </li>
      </ul>
    </div>
  );
};

Select.defaultProps = {
  label: 'Label',
  type: 'text',
  disabled: false,
};

Select.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  classes: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  shouldValidate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Select;*/
