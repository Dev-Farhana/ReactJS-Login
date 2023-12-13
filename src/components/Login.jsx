import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if(username.trim() !== '' && password.trim() !== '' && email.trim() !== '') {
      
      setIsLoggedIn(true);
      alert("Login successFul !! ");
      navigate('/home');

    } else{
      alert('Please fill all fields.');
    }
  }

  const colorChange = {
    color: isLoggedIn ? 'green' : 'red', fontWeight: 'bold'
  }


  return (
    <>
    <h2 style={{marginTop: "4rem"}}  > 
      Register Here to Log into your Account </h2>

    <div 
    style={{textAlign: 'center' , marginTop: '4rem'}}>
      <input type="text" placeholder='Enter your Name' value={username} 
       onChange={(e) => {setUsername(e.target.value)}}  />
      <br />
      <br />

      <input type="email" placeholder='Enter your Email' value={email}
       onChange={(e) => {setEmail (e.target.value)} }  />
      <br />
      <br />

      <input type="password" placeholder='Enter your Password' value={password}
       onChange={(e) => {setPassword (e.target.value)} } />
      <br />
      <br />

     <button onClick={handleLogin}>  Login  </button>
    </div>
    <p style={colorChange}> 
      {isLoggedIn ? 'You are Logged In' : 'Please fill all fields to login '}  </p>

    </>
  )
};

export default Login;