import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function PatientsList() {

    const [patientsList, setPatientsList] = useState(
        [
            {
                patientId:"12345",
                patientName:"Arun"
            },

            {
                patientId:"12345",
                patientName:"Arun"
            },

            {
                patientId:"12345",
                patientName:"Arun"
            },

            {
                patientId:"12345",
                patientName:"Arun"
            },

            {
                patientId:"12345",
                patientName:"Arun"
            },
        ]
    );
  return (
    <>
        <div>

            {patientsList.map((patient) => (
                
                <Link to={"/"}>
                    <p>{patient.patientId}</p>
                    <p>{patient.patientName}</p>
                </Link>
            ))}
        </div>
    </>
  )
}

export default PatientsList