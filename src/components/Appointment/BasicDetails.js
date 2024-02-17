import React, { useState } from 'react'

function BasicDetails() {

    const [userData, setUserData] = useState({
        email:"",
        phone:"",
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        gender:"",
        diabetes: false,
        diabetesValue:0,
        historyOfSurgery:false,
        historyOfSurgeryDescription:"",
        city:"",
        occupation:"",
        problemDescription:"",

    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setUserData({...userData,[name]:value});
        
    }

    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
  
    // const handleChange = (event) => {
    //   setDob(event.target.value);
    // };
  
    const calculateAge = () => {
      const currentDate = new Date();
      const birthDate = new Date(dob);
      let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
  
      // Check if the birthday has occurred this year
      if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
  
  return (
    <>
    <h1>basic_details</h1>
        <div>
            Email:<input value={userData.email} type='email' name='email' className='border-2'/>
            Phone:<input value={userData.phone} type='phone' name='phone' className='border-2'/>
            FirstName:<input value={userData.firstName} type='text' name='firstName' className='border-2'/>
            LastName:<input value={userData.lastName} type='text' name='lastName' className='border-2'/>
            DOB:<input value={userData.dateOfBirth} type='date' name='dateOfBirth' className='border-2'/>
            Diabetes:
            Yes<input  type='radio' name='diabetes' className='border-2'/>
            No<input type='radio' name='diabetes' className='border-2'/>

            DiabetesValue:{userData.diabetes && (<div><input type='number' value={handleChange} name='diabetesValue'/></div>)}
            Gender:
            <select  onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>

            BP:
            yes<input  type='radio' name='bloodPressure' className='border-2'/>
            No<input type='radio' name='bloodPressure' className='border-2'/>
            DiabetesValue:{userData.diabetes && (<div><input type='number' value={handleChange} name='diabetesValue'/></div>)}

            

            historyOfSurgery:
            yes<input  type='radio' name='historyOfSurgery' className='border-2'/>
            No<input type='radio' name='historyOfSurgery' className='border-2'/>

            surgery Description:{userData.historyOfSurgery && (<div><input type='text' value={handleChange} name='surgeryDescription'/></div>)}


            City:<input type='text' value={userData.city} onChange={handleChange}/>

            Occupation:<input type='text' value={userData.occupation} onChange={handleChange}/>

            Problem:<input type='text' value={userData.problemDescription} onChange={handleChange}/>

        </div>
    </>
  )
}
}

export default BasicDetails