import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AppointmentLayout from '../Layout/Appointment.Layout'

function AppointmentHOC({component:Component, ...rest}) {
  return (
    // <div>AppointmentHOC</div>
    <>
        <Router>
            <Route
             {...rest}
             Component = { (props) => (
                <AppointmentLayout>
                    <Component {...props} />
                </AppointmentLayout>
            )
        }
            />
        </Router>
    </>
  )
}

export default AppointmentHOC