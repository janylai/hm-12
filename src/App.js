import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeUserLoggedInfo = localStorage.getItem('isLoggedIn')

    if(storeUserLoggedInfo === '1'){
      setIsLoggedIn(true)
    }
  }, [])
  //useEffect бул жерде sideEffectти localStorage ке биздин переменнныйыбыз 1ге барабар болсо анда состояниени true га озгортуп сактап атат  
 

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1') //localstorage желательно обработчиктин ичинде болушу шарт 
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {  //
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />  //MainHeaderde true, false bolgonuna jarasha chygaryp beret. 
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}  
        {isLoggedIn && <Home onLogout={logoutHandler} />}    
      </main>
    </React.Fragment>
  );
}

//isLoggedIn true bolso, propston kelgen onLogout ishteit
//isLoggedIn false bolso, propston kelgen onLogin ishteit

export default App;
