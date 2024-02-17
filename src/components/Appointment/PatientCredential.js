import React, {useState} from "react";
function PatientCredential() {

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
        // if()
    }


  return (
    <>
    <h1>patient_credential</h1>
        <div>
            <input className="border-2" name='email' value={userData.email} onChange={handleChange}/>
            <input className="border-2"  name='phoneNumber' value={userData.phoneNumber} onChange={handleChange}/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    </>
  )
}

export default PatientCredential