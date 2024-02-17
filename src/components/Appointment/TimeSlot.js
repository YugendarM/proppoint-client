import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
// impor
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TimeSlot() {
    const navigate = useNavigate();

    useEffect(async()=> {
        const timeSlots = await axios.get("http://localhost:3500/api/v1/patient/.......................").
            then((req,res) => {
                if(res.data.status === 201){
                    navigate("/patient_credential");
                }
            })
    },[])


    const [timeSlots, setTimeSlots] = useState(
        [
            {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
        ]
    );

    // const navigate = useNavigate();

    const handleClick = (slot) => {
        
        axios.post("http://localhost:3500/api/v1/patient/............................", )
        
    }

    
  return (
    <>
        <div>
            {timeSlots.map((slot) => (
                <div>
                    <h1 onClick={handleClick(slot)}>{slot.date}</h1>
                    <h1>{slot.timeslots}</h1>
                </div>
            ))}
        </div>
    </>
  )
}

export default TimeSlot