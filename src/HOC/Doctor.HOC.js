import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctorLayout from '../Layout/Doctor.Layout'

function DoctorHOC({component:Component, ...rest}) {
  return (
    // <div>AppointmentHOC</div>
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