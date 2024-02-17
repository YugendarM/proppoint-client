import React, { useState } from 'react'
import basicDetailImage from "../../assets/Images/BasicDetailsImage.png"

function BasicDetails() {

    const [userData, setUserData] = useState({
        email:"",
        phone:"",
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        gender:"",
        diabetes: "",
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
  
    // const calculateAge = () => {
    //   const currentDate = new Date();
    //   const birthDate = new Date(dob);
    //   let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
  
    //   // Check if the birthday has occurred this year
    //   if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    //     calculatedAge--;
    //   }
  
  return (
    <div className='flex lg:px-64 container'>
    
        <div className='w-1/2 flex flex-col items-center gap-5'>
            <div className="flex justify-center w-full">
                <input name='email' value={userData.email} onChange={handleChange} placeholder="Enter your Email" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
            </div>

            <div className="flex justify-center w-full">
                <input name='phone' value={userData.phone} onChange={handleChange} placeholder="Enter Phone Number" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
            </div>

            <div className="flex justify-center w-full">
                <input name='firstName' value={userData.firstName} onChange={handleChange} placeholder="Enter First Name" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
            </div>

            <div className="flex justify-center w-full">
                <input name='lastName' value={userData.lastName} onChange={handleChange} placeholder="Enter Last Name" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
            </div>

            
            <div className="flex justify-center items-start flex-col w-full ml-52">
                <p className='font-semibold'>Enter Date of Birth:</p>
                <input type='date' name='dateOfBirth' value={userData.dateOfBirth} onChange={handleChange} placeholder="Enter " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
            </div>


            <div className="flex justify-center items-start flex-col w-full ml-52">
                <p className='font-semibold'>Are you a diabetic patient?</p>
                {/* <input type='date' name='dateOfBirth' value={userData.dateOfBirth} onChange={handleChange} placeholder="Enter " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" /> */}
                <div className='flex px-3 py-2 gap-3'>
                    <div className='flex gap-2 items-center'><input  type='radio' name='diabetes' className='border-2' value = {true}  onChe onChange={handleChange}/>Yes</div>
                    <div className='flex gap-2 items-center'><input type='radio' name='diabetes' className='border-2' value= {false}  onChange={handleChange}/> No</div>
                </div>
                
            </div>

            {userData.diabetes && 
            
            <div className="flex justify-center items-start flex-col w-full ml-52">
                <p className='font-semibold'>Enter the Diabetes Value:</p>
                <input type='number' name='diabetesValue' value={userData.diabetesValue} onChange={handleChange} placeholder="Enter the diabetes Value " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
            </div>
            }

            
                <div className='w-full flex flex-col items-end ml-52'>
                    <div className='w-full'>
                        <p>Gender</p>
                        <select className='border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2' value={userData.gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
            
            

            {/* Email:<input value={userData.email} type='email' name='email' className='border-2'/>
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

            Problem:<input type='text' value={userData.problemDescription} onChange={handleChange}/> */}

        </div>

        <div className='flex justify-center items-center'>
            <div className="w-1/2  flex justify- items-center">
                <div className="w-full"><img src={basicDetailImage} className=""/></div>
            </div>
        </div>
    </div>
  )
}

export default BasicDetails