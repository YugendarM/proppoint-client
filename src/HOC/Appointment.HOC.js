import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppointmentLayout from '../Layout/Appointment.Layout'

function AppointmentHOC({component:Component, ...rest}) {
  return (
    // <div>AppointmentHOC</div>
    <>
        <Routes>
            <Route
             {...rest}
             Component = { (props) => (
                <AppointmentLayout>
                    <Component {...props} />
                </AppointmentLayout>
            )
        }
            />
        </Routes>
    </>
  )
}

export default AppointmentHOC