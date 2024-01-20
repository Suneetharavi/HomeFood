import React from 'react'
import { useState } from 'react';
import styles from './AuthPage.module.css'
import Login from '../Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import Carousel from '../../components/Carousel'
import Home from '../HomePage/Home'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/MyNavbar'

function AuthPage({ user, setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <> 
        <div><Navbar/></div>
        {/* <div className='Carouselclass'><Carousel/></div> */}
        {/* <div><Home/></div> */}
      <main className={styles.AuthPage}>
       
        <div>
        <Logo />
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
        {showLogin ? <Login setUser={setUser} /> : <SignUp setUser={setUser} />}
      </main>
      <div className='Carouselclass'><Carousel/></div>
      <Home/>

      </>
    );
}

export default AuthPage