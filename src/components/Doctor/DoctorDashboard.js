import React, { useState } from 'react'

function DoctorDashboard() {

    const [timeSlots, setTimeSlots] = useState([
        {
            time:"12pm",
        }
    ]);
  return (
    <>
    <h1>DoctorDashboard</h1>
        {timeSlots.map((slot) => (
            <div>
                <p>{slot.time}</p>
                <p>{slot.time}</p>
                <p>{slot.time}</p>
            </div>
        ))}
    </>
  )
}

export default DoctorDashboard