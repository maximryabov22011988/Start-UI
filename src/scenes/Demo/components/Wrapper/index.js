import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import githubLogo from './images/icon-github.svg'

export default props => {
  const defaultClass = 'wrapper';

  const {
    className,
    halfWidth,
    fullWidth
  } = props;

  const classes = classNames(
    defaultClass,
    className,
    halfWidth && 'wrapper--halfwidth',
    fullWidth && 'wrapper--fullwidth',
  );

  return (
    <div className={classes}>
      <div className="wrapper__header">
        <div className="wrapper__title">{props.title}</div>
        <a
          className="wrapper__source-link"
          href={`https://www.${props.sourceLink}`}
          title="View the source in Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} width="24" height="24" alt=""/>
        </a>
      </div>
      {props.children}
    </div>
  );
};
