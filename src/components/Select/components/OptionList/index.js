import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import OptionItem from './components/OptionItem';

import './styles.scss';

const OptionList = props => {
  const {
    parentClass,
    options,
    onSelectItem
  } = props;

  return (
    <ul className={`options ${parentClass}__list`}>
      {
        Object.keys(options).map((key) => {
          const option = options[key];

          return (
            <OptionItem
              key={option.label}
              id={key}
              parentClass={'options'}
              onSelectItem={onSelectItem}
            >
              {option.label}
            </OptionItem>
          );
        })
      }
    </ul>
  );
};

OptionList.defaultProps = {

};

OptionList.propTypes = {

};

export default OptionList;
