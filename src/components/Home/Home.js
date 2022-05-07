import React from 'react';
import App from '../../App';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;


//бул жерде биз логин менен пароль жазгандан кийинки чыккан заголовок картага алынып чыкты.
//App.js те логин болгондо чыгат
