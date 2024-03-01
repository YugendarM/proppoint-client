import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProfileImgOne from "../../assets/Images/ProfileImg1.png"
import ProfileImgTwo from "../../assets/Images/ProfileImg2.png"
import ProfileImgThree from "../../assets/Images/ProfileImg3.png"
import ProfileImgFour from "../../assets/Images/ProfileImg4.png"
import ProfileImgFive from "../../assets/Images/ProfileImg5.png"
import DoctorCard from '../Cards/DoctorCard';

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
                "image":ProfileImgOne,

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
                "image":ProfileImgTwo
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
                "image":ProfileImgThree
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
                "image":ProfileImgFour
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
      
    //   const doctorList = await axios.get("http://localhost:3500/api/v1/patient/search-doctor");
    //   setDoctorsList(doctorList.data);
    //   console.log(doctorList);
  
    // },[])

    // const navigate = useNavigate();
    

    const handleClick = (e,name) => {
      const _id = e;
      console.log(_id);
      // axios.post("http://localhost:3500/api/v1/patient/", {_id});
      const docName = name.replace(/ /g, "-");
      window.location.href = `${docName}/time_slots`;
    }

    const param = useParams();
    console.log({param});

    
  
    return (
      

      <React.Fragment>
        <div className='container mx-auto flex flex-col justify-center my-20 px-6 md:px-6 lg:px-52 gap-6'>
          <div>
            <h1 className='font-semibold text-3xl'>{doctorsList.length} {param.specializationType} doctors available near you</h1>
          </div>
          <div className='flex flex-wrap gap-10'>
              {
                doctorsList.map((doctor) => (
                  <DoctorCard {...doctor} handleClick={handleClick}/>
                ))
              }
          </div>
        </div>
      </React.Fragment>
  );
}



export default DoctorList