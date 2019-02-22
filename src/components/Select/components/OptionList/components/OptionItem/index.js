import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const OptionItem = props => {
  const {
    id,
    parentClass,
    onSelectItem
  } = props;

  return (
    <li
      className={`${parentClass}__item`}
      tabIndex={0}
      onClick={(evt) => onSelectItem(id, evt)}
      onKeyUp={(evt) => onSelectItem(id, evt)}
    >
      {props.children}
    </li>
  );
};

OptionItem.defaultProps = {

};

OptionItem.propTypes = {

};

export default OptionItem;
