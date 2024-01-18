import React from 'react'
import { useState } from 'react';
import styles from '../AuthPage/AuthPage.css'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

function AuthPage({ user, setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
      <main className={styles.AuthPage}>
        <div>
          
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
        {showLogin ? <Login setUser={setUser} /> : <SignUp setUser={setUser} />}
      </main>
    );
}

export default AuthPage