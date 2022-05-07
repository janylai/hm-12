import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

//buttondy component kylyp alyp, kaira-kaira chakyryp ishtetish uchun jazyldy. Al props alat, ozubuzgo kerektuu nerselerdi jaza alabyz.
