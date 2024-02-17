import React, {useState} from "react";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import PatientCredentialImage  from "../../assets/Images/Introduction.png"

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

        if(1){
            window.location.href = "/basic_details"
        }
        
    }


  return (
    <>

    
       <div className="flex items-center justify-between px-64 mt-16">
            <div className="w-1/2 flex justify-center">
                <div className="w-4/12"><img src={PatientCredentialImage} className=""/></div>
            </div>
            <div className="w-1/2 flex flex-col gap-5 items-center">
                <div className="flex justify-center w-full">
                    <input className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" name='email' value={userData.email} onChange={handleChange} placeholder="Enter your Email"/>
                </div>
                <div className="w-full flex justify-center">
                    <input className="border-2 border-proppoint-primaryBlue border-opacity-50 w-3/5 rounded-md px-3 py-2 shadow-sm shadow-proppoint-primaryBlue" placeholder="Enter your Phone Number"  name='time'  onChange={handleChange}/>
                </div>

                <button onClick={() => handleSubmit()} className="bg-proppoint-primaryBlue text-white rounded-md px-3 py-1.5 hover:bg-white hover:text-proppoint-primaryBlue hover:border hover:border-proppoint-primaryBlue">Submit</button>            
            </div>
       </div>
    </>
  )
}

export default PatientCredential