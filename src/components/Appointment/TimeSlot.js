import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
// impor
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TimeSlot() {
    const navigate = useNavigate();
    const [select, setSelect] = useState(false);

    // useEffect(async() => {
    //   const slotList = await axios.get("");
    //   setTimeSlots(slotList);
    //   console.log();
      
    // },[]);

    const [date,setDate] = useState("");

    // useEffect(async()=> {
    //     const timeSlots = await axios.get("http://localhost:3500/api/v1/patient/.......................").
    //         then((req,res) => {
    //             if(res.data.status === 201){
    //                 navigate("/patient_credential");
    //             }
    //         })
    // },[])

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState({
        startTime:"",
        endTime:"",
    
    });

    const handleChangeDate = (event) => {
        setSelectedDate(event.target.value);
    };

    const [timeSlots, setTimeSlots] = useState(
        [
            {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },

              {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["10:00 AM", "11:00 AM", "2:00 PM"]
              },

        ]
    );

    // const navigate = useNavigate();

    const handleClick = (slot) => {        
        axios.post("", {selectedSlot})
        .then((req,res) => {
          if(res.data.status === 201){
            window.location.href = "/patient_credential"
          }
        })
        
    }

    const handleChange = (event) => {
        const date = event.target.value;
        setDate(date);
        console.log(date);
        
    }

    const handleSelect = (sTime, eTime, index) => {
      setSelectedSlot({startTime:`${selectedDate}T${sTime}:00`, endTime:`${selectedDate}T${eTime}:00`} );
      console.log({selectedSlot});
      setSelect(index);

    }

    

    
  return (
    <>
        <div className='flex flex-col items-center justify-center mt-10'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='text-xl font-semibold'>Enter the Date to select the Slots: </p>
                    <input type='date' onChange={handleChange} className='border-2 rounded-md px-3 py-2 w-11/12 border-proppoint-primaryBlue shadow-sm'/>
                </div>
            </div>


            <div className='flex justify-center flex-col items-center gap-5 my-10'>
                <h2 className='text-2xl font-semibold'>Available Slots:</h2>
                <div className='flex flex-wrap justify-center gap-6 px-64'>
                    {timeSlots.map((slot,index) => (
                        <div key={index} onClick={() => {handleSelect(slot.startTime, slot.endTime, index)}}  className={`cursor-pointer ${select === index ? "bg-proppoint-primaryBlue text-white" : "bg-proppoint-primaryBlue bg-opacity-15 text-proppoint-primaryBlue" }  text-xl rounded-lg px-3 py-4 hover:text-proppoint-primaryBlue hover:bg-white hover:border hover:border-proppoint-primaryBlue`}>
                            <h5>1:00 pm to 3:00 pm</h5>   
                        </div>
                    ))}
                </div>
                <div><button onClick={()=>handleClick()} className='bg-proppoint-primaryBlue text-white py-1.5 px-10 rounded-md'>Confirm</button></div>

            </div>
        </div>
    </>
  )
}

export default TimeSlot