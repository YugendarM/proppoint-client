import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

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
    const pathname = window.location.pathname;

    const pathParts = pathname.split('/');

    const middleParam = pathParts[1];

    console.log(middleParam);

    // useEffect(async() => {
    //   const doctorsList = await axios({
    //     method:"GET",
    //     // url:`/.../${middleParam}`
    //   })
    // },[])



    // const {param1,param2} = useParams();

    // console.log({param1});

    

    
  return (
    <>
        <>
            {
                doctorsList.map((doctor) => (
                    <div>
                        <Link to={`doctor/timeslot/${doctor.id}`}>{doctor.name}</Link>
                        <p>{doctor.id}</p>
                    </div>
                ))
            }
        </>
    </>
  )
}

export default DoctorList