import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doctor from "../../assets/Images/standing.png";
import Cardiology from "../../assets/Images/heart-rate-pulse-graph.png";
import Surgeon from "../../assets/Images/Specialization_icons/surgeon.png";
import Urology from "../../assets/Images/Specialization_icons/urology.png";
import Psychiatry from "../../assets/Images/Specialization_icons/Psychiatry.png";
import Gynocology from "../../assets/Images/Specialization_icons/gynocology.png";
import Gastro from "../../assets/Images/Specialization_icons/Gastroenterology.png";
import Dermo from "../../assets/Images/Specialization_icons/dermatology.png";
import Neurology from "../../assets/Images/Specialization_icons/Neurology.png";

import axios from "axios";
import BookAppointmentNavbar from "../Navbar/BookAppointmentNavbar";

const DoctorSpecialization = () => {

  // useEffect(async() => {
  //   const specializationList = await axios.get("http://localhost:3500/api/v1/patient/specialization");
  //   setSpecilization(specializationList.data);
  // },[])

  // useEffect( async() => {
  //   const specializationList = await axios.get("http://localhost:3500/api/v1/patient/specialization");
  //   setSpecilization(specializationList);
  //   console.log(specializationList);
  // },[])


  const handleClick = (e, type) => {
    const _id = e;
    console.log(_id);

    axios.post("http://localhost:3500/api/v1/patient/search-doctor", {_id})
      .then((req,res) => {
        if(res.data.status === 201){
    window.location.href=`${type}/doctors`;
        }
      })

    window.location.href = `book_appointment/${type}/doctors`;
  
  };

  const [specializations, setSpecilization] = useState([
    {
      _id: 1,
      type: "Cardiology",
      image: Cardiology,
    },
    {
      _id: 2,
      type: "Surgeon",
      image: Surgeon,
    },
    {
      _id: 3,
      type: "Urology",
      image: Urology,
    },

    {
      _id: 4,
      type: "Gynocology",
      image: Gynocology,
    },
    {
      _id: 5,
      type: "Gastro",
      image: Gastro,
    },
    {
      _id: 6,
      type: "Neurology",
      image: Neurology,
    },
    {
      _id: 7,
      type: "Psychiatry",
      image: Psychiatry,
    },
    {
      _id: 8,
      type: "Dermo",
      image: Dermo,
    },
  ]);

  return (
    <React.Fragment>
      {/* <h1 className="text-3xl font-semibold">Book your Appointments...</h1> */}
      <div className=" flex justify-center items-center mt-20 py-4 ">
        <div className="w-2/5 hidden lg:flex justify-center  ">
          <img className="" src={doctor} style={{ width: "150px" }} />
        </div>
        <div className=" flex flex-wrap gap-5 md:p-5 md:w-8/12 justify-between lg:justify-start ">
          {specializations.map((spec) => (
            <button
              onClick={() => handleClick(spec.id, spec.type)}
              className="mx-5 md:mx-0 flex flex-col h-36 md:h-48 gap-2 bg-proppoint-primaryBlueTransparent bg-opacity-10 hover:bg-blue-100 shadow hover:shadow-lg w-full md:w-48 pb-4 pl-6 pt-6 pr-2 rounded-lg"
            >
              <img src={spec.image} alt={spec.type} className="w-16" />
              <h3 className="text-2xl font-semibold">{spec.type}</h3>
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DoctorSpecialization;
