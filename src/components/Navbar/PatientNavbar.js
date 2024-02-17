import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

const Nav = (props) => {

    const {id} = useParams();
    return (
        <Link to={`/${props.route}`}>
            <div className="relative w-full">
            <h1 className={`w-32 md:w-full  text-center text-md md:text-xl px-4 py-4 ${props.isActive? "text-proppoint-primaryBlue": "text-gray-600 "}`}>{props.title}</h1>
            {props.isActive && (
                <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{height:"2px"}}/>
            )}
            </div>
        </Link>
    );
}


function PatientNavbar() {

    const currentPath = useLocation().pathname;

    // const param = useParams(); 

    const Navs =[
        {
            route:"home",
            title:"Home",
            isActive: currentPath.includes("home")
        },
        {
            route:"specialization",
            title:"Book Appointment",
            isActive: currentPath.includes("specialization")
        },
        {
            route:"about",
            title:"About Us",
            isActive: currentPath.includes("about")
        },
        {
            route:"contact",
            title:"Contact Us",
            isActive: currentPath.includes("contact")
        },
        
    ];
    return (
        <div className=' justify-center w-full'>
            <div className="flex justify-center gap-5 items-center w-full">
                {Navs.map((type) => (
                    <Nav {...type}/>
                ))}
                
            </div>
        </div>
    )
}

export default PatientNavbar


