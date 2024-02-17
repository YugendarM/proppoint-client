import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


function DoctorList() {

  

  const [doctorsList, setDoctorsList] = useState(

        [
            {
                "id": 1,
                "name": "Dr. John Smith",
                "specialty": "Cardiology",
                "specializationId": 1,
                "qualification": "MD, Cardiology",
                
                "hospital": "City Hospital",
                "location": "New York",
                "contact": "123-456-7890",
                "email": "john.smith@example.com"
              },
              {
                "id": 2,
                "name": "Dr. Sarah Johnson",
                "specializationId": 1,
                "specialty": "Pediatrics",
                "qualification": "MD, Pediatrics",
                "hospital": "Community Clinic",
                "location": "Los Angeles",
                "contact": "987-654-3210",
                "email": "sarah.johnson@example.com"
              },
              {
                "id": 3,
                "name": "Dr. Michael Lee",
                "specializationId": 1,
                "specialty": "Orthopedics",
                "qualification": "MD, Orthopedics",
                "hospital": "Regional Medical Center",
                "location": "Chicago",
                "contact": "456-789-0123",
                "email": "michael.lee@example.com"
              }
        ]
    );


    // useEffect(async() => {
      
    //   const doctorList = await axios.get("http://localhost:3500/api/v1/patient/specialization");
    //   setDoctorsList(doctorList.data);
    //   console.log(doctorList);
  
    // },[])
    const navigate = useNavigate();
    

    const handleClick = (e,name) => {
      const _id = e;
      console.log(_id);
      // axios.post("http://localhost:3500/api/v1/patient/", {_id});
      navigate(`/contact`);
    }


    
  return (
    <>
        <>
            {
                doctorsList.map((doctor) => (
                    <div>
                        <button onClick={handleClick(doctor.id,doctor.name)} >{doctor.name}</button>
                        <p>{doctor.id}</p>
                    </div>
                ))
            }
        </>
    </>
  )
}

export default DoctorList