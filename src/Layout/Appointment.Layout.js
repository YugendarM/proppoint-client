import React from 'react'

function AppointmentLayout(props) {
  return (
    <>
        <p>appointmentLayout</p>

        {props.children}

        <p>AppointmentLayoutBottom</p>
    </>
  )
}

export default AppointmentLayout