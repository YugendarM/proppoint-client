import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import doctor from "../../assets/standing.png";
import Cardiology from "../../assets/heart-rate-pulse-graph.png";

const DoctorSpecialization =()=>{

    const [specializations, setSpecilization] = useState(
        
            
                [
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  {
                    "_id": 1,
                    "type": "Cardiology"
                  },
                  
                
              
              
        ]
    );
  return (
    <>
      <div className='h-full flex justify-center items-center'>
        <div className='h-full w-2/5 flex justify-center'>
          <img className='' src= {doctor} style={{width:"150px"}}/>
        </div>
        <div className='h-full flex flex-wrap gap-10 w-3/5  '>
          {specializations.map((spec) => (
              <Link to={`${spec.type}/doctors`} className='flex flex-col gap-2 bg-proppoint-primaryBlueTransparent bg-opacity-10 w-40 px-2 py-2 rounded-lg' >
                  <img src={Cardiology} alt={spec.type} className='w-16'/>
                  <h3 className='text-2xl font-semibold'>{spec.type}</h3>
              </Link>
           
          ))}
        </div>
      </div>

        
    </>
  )
}

export default DoctorSpecialization;