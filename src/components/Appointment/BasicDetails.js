import React, { useState } from 'react'
import basicDetailImage from "../../assets/Images/BasicDetailsImage.png"
import BookAppointmentNavbar from '../Navbar/BookAppointmentNavbar';

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
        bloodPressure:"",
        bloodPressureValue:"",
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
    <div>
        <BookAppointmentNavbar/>
        <div className='flex lg:px-16 container my-10'>
    
    <div className='w-3/5 flex flex-col items-center gap-5'>
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

        
        <div className="flex justify-center items-start flex-col w-full ml-64 pl-11">
            <p className='font-semibold'>Enter Date of Birth:</p>
            <input type='date' name='dateOfBirth' value={userData.dateOfBirth} onChange={handleChange} placeholder="Enter " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>


        <div className="flex justify-center items-start flex-col w-full ml-64 pl-11">
            <p className='font-semibold'>Are you a diabetic patient?</p>
            {/* <input type='date' name='dateOfBirth' value={userData.dateOfBirth} onChange={handleChange} placeholder="Enter " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" /> */}
            <div className='flex px-3 py-2 gap-3'>
                <div className='flex gap-2 items-center'><input  type='radio' name='diabetes' className='border-2' value = {true}  onChe onChange={handleChange}/>Yes</div>
                <div className='flex gap-2 items-center'><input type='radio' name='diabetes' className='border-2' value= {false}  onChange={handleChange}/> No</div>
            </div>
            
        </div>

        {userData.diabetes && 
        
        <div className="flex justify-center items-start flex-col w-full ml-64 pl-11">
            <p className='font-semibold'>Enter the Diabetes Value:</p>
            <input type='number' name='diabetesValue' value={userData.diabetesValue} onChange={handleChange} placeholder="Enter the diabetes Value " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>
        }

        
        <div className='w-full flex flex-col items-end ml-64 pl-11'>
            <div className='w-full'>
                <p>Gender</p>
                <select className='border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2' value={userData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
            </div>
        </div>

        <div className="flex justify-center items-start flex-col w-full ml-64 pl-11">
            <p className='font-semibold'>Are you a BP patient?</p>
            {/* <input type='date' name='dateOfBirth' value={userData.dateOfBirth} onChange={handleChange} placeholder="Enter " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" /> */}
            <div className='flex px-3 py-2 gap-3'>
                <div className='flex gap-2 items-center'><input  type='radio' name='bloodPressure' className='border-2' value = {true}  onChe onChange={handleChange}/>Yes</div>
                <div className='flex gap-2 items-center'><input type='radio' name='bloodPressure' className='border-2' value= {false}  onChange={handleChange}/> No</div>
            </div>
            
        </div>

        {userData.bloodPressure && 
        
        <div className="flex justify-center items-start flex-col w-full ml-64 pl-11">
            <p className='font-semibold'>Enter the Diabetes Value:</p>
            <input type='number' name='bloodPressureValue' value={userData.bloodPressureValue} onChange={handleChange} placeholder="Enter the Blood Pressure Value " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>
        }

        <div className="flex justify-center items-start flex-col w-full ml-64 pl-11">
            <p className='font-semibold'>History of Surgery?</p>
            {/* <input type='date' name='dateOfBirth' value={userData.dateOfBirth} onChange={handleChange} placeholder="Enter " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" /> */}
            <div className='flex px-3 py-2 gap-3'>
                <div className='flex gap-2 items-center'><input  type='radio' name='surgery' className='border-2' value = {true}  onChe onChange={handleChange}/>Yes</div>
                <div className='flex gap-2 items-center'><input type='radio' name='surgery' className='border-2' value= {false}  onChange={handleChange}/> No</div>
            </div>
            
        </div>

        {userData.surgery && 
        
        <div className="flex justify-center items-start flex-col w-full ml-52">
            <p className='font-semibold'>Enter the Diabetes Value:</p>
            <input type='text' name='surgeryDescription' value={userData.surgeryDescription} onChange={handleChange} placeholder="Enter the Blood Pressure Value " className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>
        }

        <div className="flex justify-center w-full">
            <input name='city' value={userData.city} onChange={handleChange} placeholder="Enter city" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>

        <div className="flex justify-center w-full">
            <input name='occupation' value={userData.occupation} onChange={handleChange} placeholder="Enter occupation" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>

        <div className="flex justify-center w-full">
            <input name='problemDescription' value={userData.problemDescription} onChange={handleChange} placeholder="Enter problemDescription" className="border-2 border-proppoint-primaryBlue border-opacity-70 shadow-sm shadow-proppoint-primaryBlue w-3/5 rounded-md px-3 py-2" />
        </div>
        
        <button className='bg-proppoint-primaryBlue text-white font-semibold px-4 py-2 rounded-md text-lg'>Submit</button>
    </div>

    <div className='flex justify-center items-center'>
        <div className="w-1/2  flex justify- items-center">
            <div className="w-full"><img src={basicDetailImage} className="" style={{width:"500px"}}/></div>
        </div>
    </div>
</div>
    </div>
  )
}

export default BasicDetails