import React, { useState } from 'react'
import TimePicker from 'react-time-picker';


function DoctorSlotUpdate() {

    const [slots, setSlots] = useState({
        date: "",
        time:""
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setSlots({...slots,[name]:value});
        
    }

    


  return (
    <>
        <div>
            <input type='date' onChange={handleChange} />
            <button></button>
            <TimePicker/>
        </div>
    </>
  )
}

export default DoctorSlotUpdate