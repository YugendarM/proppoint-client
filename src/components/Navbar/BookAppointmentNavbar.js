import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = (props) => {
    const { pathname } = useLocation();
    const isActive = pathname === `/${props.route}`;
    
    
}

function BookAppointmentNavbar() {
    return (
        <div className='flex justify-center'>

<Link to={`/`} >
            <div className="relative w-full">
                <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 text-gray-600"}`}>
                    Home
                </h1>
                {/* {isActive && (
                    <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
                )} */}
            </div>
        </Link>

        <Link to={`/specialization`}>
            <div className="relative w-full">
                <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 text-proppoint-primaryBlue`}>
                    Book Appointments
                </h1>
                
                    <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
                
            </div>
        </Link>

        <Link to={`/about`}>
            <div className="relative w-full">
                <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 text-gray-600"}`}>
                    About Us
                </h1>
                {/* {isActive && (
                    <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
                )} */}
            </div>
        </Link>

        <Link to={`/contact`}>
            <div className="relative w-full">
                <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 text-gray-600"}`}>
                    Contact Us
                </h1>
                {/* {isActive && (
                    <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
                )} */}
            </div>
        </Link>
        </div>

        
    );
}

export default BookAppointmentNavbar;
