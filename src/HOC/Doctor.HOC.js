import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import DoctorLayout from '../Layout/Doctor.Layout'
// import Dorctor 

function DoctorHOC({component:Component, ...rest}) {
  return (
    <>
        <Routes>
            <Route
             {...rest}
             Component = { (props) => (
                <DoctorLayout>
                    <Component {...props} />
                </DoctorLayout>
            )
        }
            />
        </Routes>
    </>
  )
}

export default DoctorHOC