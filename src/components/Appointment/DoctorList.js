import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProfileImgOne from "../../assets/Images/ProfileImg1.png"
import DoctorImg from "../../assets/Images/ProfileImg4.png"

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
                "image":{ProfileImgOne}
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
                "image":{ProfileImgOne}
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
                "image":{ProfileImgOne}
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
                "image":{ProfileImgOne}
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
                "image":{ProfileImgOne}
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
                "image":{ProfileImgOne}
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
                "image":{ProfileImgOne}
              }

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
      navigate(`/contact`);
    }


    
  
    return (
      <div className="container mx-auto px-4">
        
        <main className="mt-12">
          <section className="container mx-auto flex flex-wrap items-start ">
            <div className="w-full md:w-9/12">
              <div className="grid grid-cols-1 flex justify-center md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className=" bg-blue-100 rounded-2xl shadow-2xl">
                  <img
                    src={ProfileImgOne}
                    alt="Jane Doe"
                    className="w-full h-48 object-cover rounded-tr-2xl rounded-tl-2xl mb-4"
                  />
                  <div className='flex '>
                    {doctorsList.map((doctor) => (
                      <span className="flex items-center flex-col">
                        <h3 className="text-2xl font-medium">{doctor.name}</h3>
                        <p className="text-gray-600 mb-2">{doctor.yearOfExperience} years of Experience</p>
                        <p className="text-gray-600">{doctor.location}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 mt-4 mb-2 text-white font-bold py-2 px-8 rounded-3xl">
                        Book a slot

                      </button>
                    </span>
                    ))}
                  </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-2/12 md:pl-4 sticky top-0">
            <img
              src={DoctorImg}
              alt="Hospital queue"
              className="w-full object-cover"
            />
          </div> */}
        </section>
      </main>
    </div>
  );
}



export default DoctorList