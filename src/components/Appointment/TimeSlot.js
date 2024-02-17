import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
// impor
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TimeSlot() {

    // useEffect(async()=> {
    //     const timeSlots = await axios({
    //         method:"GET",
    //         url:"",
    //     });
    // },[])


    const [timeSlots, setTimeSlots] = useState(
        [
            {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
        ]
    );

    const navigate = useNavigate();

    const handleSlotSelection = (slot) => {
        console.log(slot.date,slot.timeSlots);
        navigate("/patient_credential");
    }

    
  return (
    <>
        <div>
            {timeSlots.map((slot) => (
                <div>
                    <h1 onClick={handleSlotSelection(slot)}>{slot.date}</h1>
                    <h1>{slot.timeslots}</h1>
                </div>
            ))}
        </div>
    </>
  )
}

export default TimeSlot