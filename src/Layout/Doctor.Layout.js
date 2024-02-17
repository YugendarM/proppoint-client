import React from 'react'

function DoctorLayout(props) {
  return (
    <>
        <p>DoctorLayout</p>

        {props.children}

        <p>DoctorLayoutBottom</p>
    </>
  )
}

export default DoctorLayout