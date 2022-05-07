
import React, { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


//debouncing, debounce
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // write some email
  const [emailIsValid, setEmailIsValid] = useState(); // check is email valid or not
  const [enteredPassword, setEnteredPassword] = useState(''); // write some password
  const [passwordIsValid, setPasswordIsValid] = useState(); // check is password valid or not
  const [formIsValid, setFormIsValid] = useState(false); // email and password are valid


  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
      console.log('changed');
    }, 3000);
    // бул жерде useEffect менен эки функцияны бирдей текшерип иштетип жатат


    // clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]); //return дайыма тазалаган функцияны кайтарат. Буга чейинкисин очуруп башынан setTimeoutту иштетет.
  

  const emailChangeHandler = (event) => {     //бул функция жазылган emailды озуно сактайт
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {     //бул функция жазылган паролду озуно сактайт
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {           //жазылган emailдын туура жазылышын текшерет
    setEmailIsValid(enteredEmail.includes('@'));  
  };

  const validatePasswordHandler = () => {               //жазылган паролдун туура жазылышын текшерет
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {                    //браузердеги обновленияны токтотуп, propsтон келген 
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>  
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}  //пропстон emailChangeHandler озуно алат
            onBlur={validateEmailHandler}  //инпуттун методу, емайл жазыла элек болсо, анда false болуп кызыл болуп калат. т.е, биз инпутту басканда эле проверка журо баштайт 
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}  //инпуттун методу, пароль жазыла элек болсо, анда false болуп кызыл болуп калат. т.е, биз инпутту басканда эле проверка журо баштайт
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;