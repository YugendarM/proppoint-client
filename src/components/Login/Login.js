import React, { useState } from 'react'

function Login() {

    const [loginData, setLoginData] = useState({
        email:"",
        password:"",
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setUserData({...userData,[name]:value});
        
    }

    const handleSubmit = () => {
        console.log({loginData});
    }

  return (
    <>
        <input type='email' name='email' onChange={handleChange} value={user.email}/>
        <input type='password' name='password' onChange={handleChange} value={user.password}/>
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login