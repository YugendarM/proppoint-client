import React from 'react'
import PatientNavbar from '../components/Navbar/PatientNavbar'

function AppointmentLayout(props) {
  return (
    <>
        <PatientNavbar/>

        {props.children}

    </>
  )
}

export default AppointmentLayout