import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import Logo2 from "../alogo2.png";
import { auth } from '../firebase'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential)
      if (auth) {
        navigate('/');
      }
    }).catch((error) =>{
      console.log(error.message)
    })
  }
  const register = e =>{
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((auth) =>{
      console.log(auth);
      if (auth) {
        navigate('/');
      }
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className='login'>
        <Link to ="/">
          <img className='login_logo' src={Logo2}/>
        </Link>
        <div className="login_container">
            <h1>Sign In</h1>
            <form onSubmit={signIn}>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn}>Sign in</button>
            </form>
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Nootice and our Interest-Based Ads Notice.</p>
            <button onClick={register} className="registerbtn">Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login