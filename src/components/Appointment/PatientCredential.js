import React, {useState} from "react";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

function PatientCredential() {

    const [value, onChange] = useState('00:00');

    const [userData,setUserData] = useState({
        email:'',
        phoneNumber:'',
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setUserData({...userData,[name]:value});
        
    }

    const handleSubmit = () => {
        console.log({userData});
        console.log(value);
        // if()
    }


  return (
    <>
    <h1>patient_credential</h1>

    
        <div>
            <input className="border-2" name='email' value={userData.email} onChange={handleChange}/>
            <input className="border-2"  name='phoneNumber' value={userData.phoneNumber} onChange={handleChange}/>
            <input className="border-2"  name='time'  onChange={handleChange}/>

            <TimePicker className="p-10" onChange={onChange} value={value} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    </>
  )
}

export default PatientCredential