import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-page">
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <input type='password' placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-button">Aready Have An Account? <span>Login</span></p>
        <div className="loginsignup-agree">
        <input type='checkbox' name=''/>
        <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
