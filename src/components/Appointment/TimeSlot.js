import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
// impor
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookAppointmentNavbar from '../Navbar/BookAppointmentNavbar';


function TimeSlot() {
    const navigate = useNavigate();
    const [select, setSelect] = useState(false);


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
            "startTime":"2024-12-02T09:00",
            "endTime":"2024-12-02T09:00",

          },

              {
<<<<<<< HEAD
                "startTime":"2024-12-02T09:00",
                "endTime":"2024-12-02T09:00",

              },
              {
                "startTime":"2024-12-02T09:00",
                "endTime":"2024-12-02T09:00",

              },
              {
                "startTime":"2024-12-02T09:00",
                "endTime":"2024-12-02T09:00",

=======
                "date": "2024-02-17",
                "timeslots": ["03:00 PM", "04:00 PM", "05:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["05:00 PM", "06:00 PM", "07:00 PM"]
              },
              {
                "date": "2024-02-17",
                "timeslots": ["07:00 PM", "08:00 PM", "09:00 PM"]
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
>>>>>>> 88fc0e1c735db70d5893b708db8a847c00d64801
              },
             

              

        ]
    );


    const handleClick = (slot) => {
      console.log({selectedSlot});
            console.log(selectedSlot.startTime);
            console.log(selectedSlot.endTime);
            console.log({selectedSlot});
            console.log({selectedDate});        
        axios.post("", {selectedSlot})
        .then((req,res) => {
          if(res.data.status === 201){
            window.location.href = "/patient_credential"
            
          }
        })
        
    }

    const handleChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        console.log(selectedDate);
        
    }

    const handleSelect = (sTime, eTime, index) => {
      setSelectedSlot({startTime:`${selectedDate}T${sTime}`, endTime:`${selectedDate}T${eTime}`} );
      
      setSelect(index);

    }

    const calcTime = (startTime) => {
      console.log(startTime+"start");
      if (startTime) {
        const time = startTime.split("T");
        console.log(time);
        console.log(time[1]);
        // console.log(time[1]);
        return time[1];
      } else {
        return ""; // or any other default value or handling
      }
    }

    

    
  return (
    <>
    <BookAppointmentNavbar/>
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
                        <div key={index} onClick={() => {handleSelect(slot.startTime, slot.endTime, index)}}  className={`cursor-pointer ${select === index ? "bg-proppoint-primaryBlue text-white" : "bg-proppoint-primaryBlue bg-opacity-15 text-proppoint-primaryBlue" }  text-xl rounded-lg px-6 py-9 font-semibold hover:text-proppoint-primaryBlue hover:bg-white hover:border hover:border-proppoint-primaryBlue`}>
                            <h5>{calcTime(slot.startTime)} to {calcTime(slot.endTime)}</h5>   
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