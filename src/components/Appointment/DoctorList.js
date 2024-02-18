import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProfileImgOne from "../../assets/Images/ProfileImg1.png"
import ProfileImgTwo from "../../assets/Images/ProfileImg2.png"
import ProfileImgThree from "../../assets/Images/ProfileImg3.png"
import ProfileImgFour from "../../assets/Images/ProfileImg4.png"
import ProfileImgFive from "../../assets/Images/ProfileImg5.png"
import DoctorImg from "../../assets/Images/ProfileImg4.png"
import BookAppointmentNavbar from '../Navbar/BookAppointmentNavbar';

function DoctorList() {

  

  const [doctorsList, setDoctorsList] = useState(

        [
            {
                "id": 1,
                "name": "Dr. John Smith",
                "specialty": "Cardiology",
                "specializationId": 1,
                "qualification": "MD, Cardiology",
                "yearOfExperience":4,
                "hospital": "City Hospital",
                "location": "New York",
                "contact": "123-456-7890",
                "email": "john.smith@example.com",
                "image":{ProfileImgOne}
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
                "email": "sarah.johnson@example.com",
                "yearOfExperience":4,
                "image":{ProfileImgTwo}
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
                "email": "michael.lee@example.com",
                "yearOfExperience":4,
                "image":{ProfileImgThree}
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
                "email": "michael.lee@example.com",
                "yearOfExperience":4,
                "image":{ProfileImgFour}
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
                "email": "michael.lee@example.com",
                "yearOfExperience":4,
                "image":ProfileImgFive
              },

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
      window.location.href = decodeURIComponent(`/${name}/time_slots`);
    }


    
  
    return (
      <div>
        <BookAppointmentNavbar/>
      <div className="container mx-auto px-4">
        
        <main className="mt-12">
          <section className="flex flex-wrap items-center justify-center ">
            <div className="w-full md:w-full px-16">
              <div className="flex justify-center gap-4 ">
                <div className="  rounded-2xl flex flex-wrap gap-4 ">
                {doctorsList.map((doctor) => (
                  <div className='bg-blue-100 flex flex-col items-center justify-center rounded-2xl'>
                    <img
                    src={ProfileImgOne}
                    alt="Jane Doe"
                    className="w-full h-48 object-cover rounded-tr-2xl rounded-tl-2xl mb-4"
                  />
                 
                    
                      <span className="flex items-center flex-col">
                        <h3 className="text-2xl font-medium">{doctor.name}</h3>
                        <p className="text-gray-600 mb-1">{doctor.yearOfExperience} years of Experience</p>
                        <p className="text-gray-600">{doctor.location}</p>
                        <button onClick={() => {handleClick(doctor.id, doctor.name)}} className="bg-blue-500 hover:bg-blue-700 hover:bg-blue-100 mt-4 mb-5 text-white font-bold py-2 px-8 rounded-3xl">
                        Book a slot

                      </button>
                    </span>
                  </div>
                    ))}
                  
                  </div>
               </div>
            </div>
          
          </section>
        </main>
      </div>
      </div>
  );
}



export default DoctorList