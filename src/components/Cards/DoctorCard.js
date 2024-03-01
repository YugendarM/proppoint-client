import React from 'react'

const DoctorCard = ({ handleClick , ...doctor } ) => {
  return (
    <div className='bg-blue-100 w-full md:w-[47%] lg:w-[30%] flex flex-col items-center justify-center rounded-2xl'>
                    <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover rounded-tr-2xl rounded-tl-2xl mb-4"
                  />
                 
                    
                      <span className="flex items-center flex-col">
                        <h3 className="text-2xl font-medium">{doctor.name}</h3>
                        <p className="text-gray-600 mb-1">{doctor.yearOfExperience} years of Experience</p>
                        <p className="text-gray-600">{doctor.location}</p>
                        <button onClick={() => {handleClick(doctor.id, doctor.name)}} className="bg-blue-500 hover:bg-blue-700 mt-4 mb-5 text-white font-bold py-2 px-8 rounded-3xl">
                        Book a slot

                      </button>
                    </span>
                  </div>
  )
}

export default DoctorCard
