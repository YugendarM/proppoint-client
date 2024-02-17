import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const DoctorSpecialization =()=>{

    const [specializations, setSpecilization] = useState(
        
            
                [
                  {
                    "specializationId": 1,
                    "specializationName": "Cardiology"
                  },
                  {
                    "specializationId": 2,
                    "specializationName": "Dermatology"
                  },
                  {
                    "specializationId": 3,
                    "specializationName": "Endocrinology"
                  },
                  {
                    "specializationId": 4,
                    "specializationName": "Gastroenterology"
                  },
                  {
                    "specializationId": 5,
                    "specializationName": "Neurology"
                  },
                  {
                    "specializationId": 6,
                    "specializationName": "Oncology"
                  },
                  {
                    "specializationId": 7,
                    "specializationName": "Orthopedics"
                  },
                  {
                    "specializationId": 8,
                    "specializationName": "Pediatrics"
                  },
                  {
                    "specializationId": 9,
                    "specializationName": "Psychiatry"
                  },
                  {
                    "specializationId": 10,
                    "specializationName": "Surgery"
                  }
                
              
              
        ]
    );
  return (
    <div>
      <h1>heloooo</h1>

        {specializations.map((spec) => (
            <div>  

                <Link to={`/doctors/${spec.specializationId}`} className=''>{spec.specializationId}</Link>
                <p >{spec.specializationName}</p>
            </div>
            
        ))}
    </div>
  )
}

export default DoctorSpecialization;