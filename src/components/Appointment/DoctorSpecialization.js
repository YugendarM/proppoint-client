import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import doctor from "../../assets/Images/standing.png";
import Cardiology from "../../assets/Images/heart-rate-pulse-graph.png";
import axios from 'axios';
import PatientNavbar from '../Navbar/PatientNavbar';
import BookAppointmentNavbar from '../Navbar/BookAppointmentNavbar';

const DoctorSpecialization =()=>{

  const handleClick = (e, type) => {
    const _id = e;
    console.log(_id);

    // axios.post("http://localhost:3500/api/v1/patient/search-doctor", {_id})
    //   .then((req,res) => {
    //     if(res.data.status === 201){
          // window.location.href="${specialization}/doctors";
    //     }
    //   })

    window.location.href=`specialization/${type}/doctors`;
    // window.history.pushState(null, null, `/${specialization}/doctors`);
    //       window.history.go();
  }



    const [specializations, setSpecilization] = useState(
        
            
                [
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Nuero"
                  },
                  {
                    "_id": 1,
                    "type": "Surgeon"
                  },
                  {
                    "_id": 1,
                    "type": ""
                  },
                  {
                    "_id": 1,
                    "type": "cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  
                
              
              
        ]
    );
  return (
    <>
    <BookAppointmentNavbar/>
    
      <div className='h-full flex justify-center items-center my-10'>
        <div className='h-full w-2/5 flex justify-center'>
          <img className='' src= {doctor} style={{width:"150px"}}/>
        </div>
        <div className='h-full flex flex-wrap gap-10 w-3/5  '>
          {specializations.map((spec) => (
              <button onClick={() => handleClick(spec.id, spec.type)} className='flex flex-col gap-2 bg-proppoint-primaryBlueTransparent bg-opacity-10 w-40 px-2 py-2 rounded-lg' >
                  <img src={Cardiology} alt={spec.type} className='w-16'/>
                  <h3 className='text-2xl font-semibold'>{spec.type}</h3>
              </button>
           
          ))}
        </div>
      </div>

        
    </>
  )
}

export default DoctorSpecialization;