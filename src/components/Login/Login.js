import axios from 'axios';
import React, { useState } from 'react'
import PatientCredentialImage from "../../assets/Images/Introduction.png"

function Login() {

    const [loginData, setLoginData] = useState({
        email:"",
        password:"",
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setLoginData({...loginData,[name]:value});
        
    }

    const handleSubmit = () => {

        // axios.post("")
        // .then((req,res) => {
        //     console.log(req.data);
        // }).then(() => {
            window.location.href = "/doctor"
        // })
    }

  return (
    <>
        <div className="flex items-center justify-between px-64 mt-16">
            <div className="w-1/2 flex justify-center">
                <div className="w-4/12"><img src={PatientCredentialImage} className=""/></div>
            </div>
            <div className="w-1/2 flex flex-col gap-5 items-center">
                <div className="flex justify-center w-full">
                    <input className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" name='email' value={loginData.email} onChange={handleChange} placeholder="Enter your Email"/>
                </div>
                <div className="w-full flex justify-center">
                    <input className="border-2 border-proppoint-primaryBlue border-opacity-50 w-3/5 rounded-md px-3 py-2 shadow-sm shadow-proppoint-primaryBlue" placeholder="Enter Password"  name='password' type='password'  onChange={handleChange}/>
                </div>

                <button onClick={() => handleSubmit()} className="bg-proppoint-primaryBlue text-white rounded-md px-3 py-1.5 hover:bg-white hover:text-proppoint-primaryBlue hover:border hover:border-proppoint-primaryBlue">Login</button>            
            </div>
       </div>
    </>
  )
}

export default Login