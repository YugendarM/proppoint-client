import axios from 'axios';
import React, { useState } from 'react'

const AppointmentBlock = ({ period, number }) => (
    <section className="flex flex-col justify-center items-center px-14 pt-6 pb-9 w-full text-2xl bg-white rounded-2xl mt-20">
      <h4 className="text-blue-600 font-semibold">{period}</h4>
      <p className="mt-3 text-7xl font-bold text-black max-md:text-4xl">{number}</p>
      <p className="self-stretch items-center  text-center justify-center mt-1.5 text-neutral-600">Appointments</p>
    </section>
  );

  const handleClick  = (_id) => {
    // axios.post("", {})
    // .then((req,res) => {
    //   if(res.data.status == 201){
    //     // window.location.href = `/doctor/patients_list/${_id}`
    //   }
      window.location.href = `/doctor/patients_list/${_id}`
    // })
  }
  
  const PatientRow = ({ serial, id, name, gender }) => (
    <div className="flex gap-5 justify-between items-center mt-4 max-w-full w-[785px] max-md:flex-wrap">
      <p className="self-stretch my-auto">{serial}.</p>
      <p className="flex-auto self-stretch my-auto">#{id}</p>
      <p className="flex-auto self-start mt-3">{name}</p>
      <p className="self-stretch my-auto">{gender}</p>
      <div>
      <button onClick={() => {handleClick(id)}} className="justify-center  self-stretch  font-medium text-white whitespace-nowrap bg-blue-600 rounded-3xl px-3 py-2 text-2xl ml-32">View profile</button>

      </div>
    </div>
  );

function DoctorDashboard() {

    const appointments = [
        { period: "Morning", number: "18" },
        { period: "Afternoon", number: "23" },
        { period: "Evening", number: "12" },
      ];
    
      const patients = [
        { serial: "1", id: "20934750", name: "Morgan Greene", gender: "Female" },
        { serial: "2", id: "20934751", name: "Cheyeneotosh", gender: "Male" },
        { serial: "3", id: "20934752", name: "Makenna Calzoni", gender: "Female" },
        { serial: "4", id: "20934753", name: "Desirae Madsen", gender: "Male" },
        { serial: "5", id: "20934754", name: "Tatiana Lubin", gender: "Female" },
        { serial: "6", id: "20934755", name: "Maria Schleifer", gender: "Female" },
        { serial: "7", id: "20934756", name: "Haylie Mango", gender: "Male" },
      ];
    
      return (
        <main className="pr-20 bg-slate-300 max-md:pr-5">
          <section className="flex gap-5 max-md:flex-col max-md:gap-0">
            <aside className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
              <nav className="flex flex-col grow px-7 py-12 w-full text-2xl font-medium text-black whitespace-nowrap bg-white rounded-none max-md:px-5 max-md:mt-6">
                <h2 className="justify-center p-4 mt-80 text-blue-600 border-b border-solid border-b-[color:var(--Primary-Blue,#2A66FE)] max-md:mt-10">Overview</h2>
                <p className="justify-center p-4 mt-4 bg-white max-md:mr-2">Appointments</p>
                <p className="self-start mt-8 ml-4 max-md:ml-2.5">Patients</p>
                <p className="self-start mt-12 ml-4 max-md:mt-10 max-md:ml-2.5">Edit Availability</p>
              </nav>
            </aside>
            <section className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
              <section className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    {appointments.map((app, index) => (
                      <AppointmentBlock key={index} period={app.period} number={app.number} />
                    ))}
                  </div>
                </div>
              </section>
              <article className="flex flex-col items-center pt-5 pb-12 mt-7 text-2xl text-black bg-white rounded-[32px] max-md:max-w-full">
                <header className="flex gap-5 justify-center  px-20 py-2.5 font-medium border-b border-solid border-b-black border-b-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <p>S.No</p>
                  <p>Patient ID</p>
                  <p className="pl-28">Name</p>
                  <p className="pl-28">Gender</p>
                  <p className="flex-auto pl-28">Action</p>
                </header>
                {patients.map((patient, index) => (
                  <PatientRow key={index} serial={patient.serial} id={patient.id} name={patient.name} gender={patient.gender} />
                ))}
              </article>
            </section>
          </section>
        </main>
      );
    }

export default DoctorDashboard
