import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = (props) => {
    const { pathname } = useLocation();
    const isActive = pathname === `/${props.route}`;
    
    return (
        <Link to={`/${props.route}`}>
            <div className="relative w-full">
                <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
                    {props.title}
                </h1>
                {isActive && (
                    <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
                )}
            </div>
        </Link>
    );
}

function PatientNavbar() {
    return (
<<<<<<< HEAD
        <div className='justify-center w-full'>
            <div className="flex justify-center gap-5 items-center w-full">
                <Nav route="" title="Home" />
                <Nav route="specialization" title="Book Appointment" />
                <Nav route="about" title="About Us" />
                <Nav route="contact" title="Contact Us" />
=======
        <div>
            <div className="justify-center text-base w-full flex justify-center gap-5 items-center font-semibold w-full">
                {Navs.map((type) => (
                    <Nav {...type}/>
                ))}
                
>>>>>>> 88fc0e1c735db70d5893b708db8a847c00d64801
            </div>
        </div>
    );
}

export default PatientNavbar;
