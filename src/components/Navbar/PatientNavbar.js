// // import React from 'react';
// // import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

// // const Nav = (props) => {
// //     const { pathname } = useLocation();
// //     const isActive = pathname === `/${props.route}`;
    
// //     return (
// //         <Link to={`/${props.route}`}>
// //             <div className="relative w-full">
// //                 <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
// //                     {props.title}
// //                 </h1>
// //                 {isActive && (
// //                     <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
// //                 )}
// //             </div>
// //         </Link>
// //     );
// // }

// // // const navLinks =[
// // //     {
// // //         route:"",
// // //         title:"Home",
// // //         isActive: currentPath.includes("")
// // //     },
// // //     {
// // //         route:"book_appointment",
// // //         title:"Book Appointment",
// // //         isActive: currentPath.includes("book_appointment")
// // //     },
// // //     {
// // //         route:"about",
// // //         title:"About Us",
// // //         isActive: currentPath.includes("about")
// // //     },
// // //     {
// // //         route:"contact",
// // //         title:"Contact Us",
// // //         isActive: currentPath.includes("contact")
// // //     },
    
// // // ];

// // function PatientNavbar() {

// //     const currentPath = useLocation().pathname;
// //     console.log(currentPath);

// //     const navLinks =[
// //         {
// //             route:"",
// //             title:"Home",
// //             isActive: currentPath.includes("")
// //         },
// //         {
// //             route:"book_appointment",
// //             title:"Book Appointment",
// //             isActive: currentPath.includes("book_appointment")
// //         },
// //         {
// //             route:"about",
// //             title:"About Us",
// //             isActive: currentPath.includes("about")
// //         },
// //         {
// //             route:"contact",
// //             title:"Contact Us",
// //             isActive: currentPath.includes("contact")
// //         },
        
// //     ];

// //     // const type = pathname.split('/')[1];

// //     return (
        


// //         // <div className='flex justify-center'>
// //         //     {navLinks.map((link) => (
// //         //         <Link to={`${link.id}`} className="relative w-full">
// //         //                 <h1 className={`  text-center text-md md:text-xl px-4 py-4 ${type === link.id ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
// //         //                     {link.name}
// //         //                 </h1>
// //         //                 {type === link.id && (
// //         //                     <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
// //         //                 )}
// //         //         </Link>
// //         //     ))}
// //         // </div>

// //         <div className="relative overflow-x-scroll md:overflow-visible justify-center flex gap-6 py-2 ">
// //                 {navLinks.map((type) => (
// //                     <Nav {...type}/>
// //                 ))}
// //                 <div className="absolute bottom-1.5 w-full bg-gray-200 " style={{height:"2px"}}/>
// //             </div>
// //     );
// // }

// // export default PatientNavbar;



// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// // const Nav = ({ route, title }) => {
// //     const { pathname } = useLocation();
// //     const isActive = pathname === `/${route}`;
    
// //     return (
// //         <Link to={`/${route}`}>
// //             <div className="relative w-full">
// //                 <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
// //                     {title}
// //                 </h1>
// //                 {isActive && (
// //                     <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
// //                 )}
// //             </div>
// //         </Link>
// //     );
// // }

// // import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';

// // const Nav = ({ route, title }) => {
// //     const { pathname } = useLocation();
// //     const isActive = pathname.startsWith(`/${route}`);
    
// //     return (
// //         <Link to={`/${route}`}>
// //             <div className="relative w-full">
// //                 <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
// //                     {title}
// //                 </h1>
// //                 {isActive && (
// //                     <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
// //                 )}
// //             </div>
// //         </Link>
// //     );
// // }

// // export default Nav;

// // import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';

// const Nav = ({ route, title }) => {
//     const { pathname } = useLocation();
//     const isActive = pathname === `/${route}`;
    
//     return (
//         <Link to={`/${route}`}>
//             <div className="relative w-full">
//                 <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
//                     {title}
//                 </h1>
//                 {isActive && (
//                     <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
//                 )}
//             </div>
//         </Link>
//     );
// }

// // export default Nav;



// // function PatientNavbar() {
// //     const { pathname } = useLocation();

// //     const navLinks = [
// //         {
// //             route: "",
// //             title: "Home",
// //         },
// //         {
// //             route: "book_appointment",
// //             title: "Book Appointment",
// //         },
// //         {
// //             route: "about",
// //             title: "About Us",
// //         },
// //         {
// //             route: "contact",
// //             title: "Contact Us",
// //         },
// //     ];

// //     return (
// //         <div className="relative overflow-x-scroll md:overflow-visible justify-center flex gap-6 py-2">
// //             {navLinks.map((navLink) => (
// //                 <Nav key={navLink.route} route={navLink.route} title={navLink.title} />
// //             ))}
// //             <div className="absolute bottom-1.5 w-full bg-gray-200" style={{ height: "2px" }} />
// //         </div>
// //     );
// // }

// function PatientNavbar() {
//     return (
//         <div className="relative overflow-x-scroll md:overflow-visible justify-center flex gap-6 py-2">
//             <Nav route="" title="Home" />
//             <Nav route="book_appointment" title="Book Appointment" />
//             <Nav route="about" title="About Us" />
//             <Nav route="contact" title="Contact Us" />
//             <div className="absolute bottom-1.5 w-full bg-gray-200" style={{ height: "2px" }} />
//         </div>
//     );
// }


// export default PatientNavbar;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Nav = ({ route, title }) => {
//     const { pathname } = useLocation();
//     const isActive = pathname === `/${route}` || (pathname !== '/' && pathname.includes(`/${route}`));
    
//     return (
//         <Link to={`/${route}`}>
//             <div className="relative w-full">
//                 <h1 className={`w-32 md:w-full text-center text-md md:text-xl px-4 py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
//                     {title}
//                 </h1>
//                 {isActive && (
//                     <div className="absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
//                 )}
//             </div>
//         </Link>
//     );
// }

// function PatientNavbar() {
//     const { pathname } = useLocation();

//     const navLinks = [
//         {
//             route: "",
//             title: "Home",
//         },
//         {
//             route: "book_appointment",
//             title: "Book Appointment",
//         },
//         {
//             route: "about",
//             title: "About Us",
//         },
//         {
//             route: "contact",
//             title: "Contact Us",
//         },
//     ];

//     return (
//         <div className="relative overflow-x-scroll md:overflow-visible justify-center flex gap-6 py-2">
//             {navLinks.map((navLink) => (
//                 <Nav key={navLink.route} route={navLink.route} title={navLink.title} />
//             ))}
//             <div className="absolute bottom-1.5 w-full bg-gray-200" style={{ height: "2px" }} />
//         </div>
//     );
// }

// export default PatientNavbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



const Nav = ({ route, title }) => {
    const { pathname } = useLocation();
    const isActive = route === "" ? pathname === "/" : pathname.includes(`/${route}`);
    
    return (
        <Link to={`/${route}`}>
            <div className="relative w-full">
                <h1 className={`w-full font-medium text-center text-xl md:text-xl px-4 py-2 md:py-4 ${isActive ? "text-proppoint-primaryBlue" : "text-gray-600"}`}>
                    {title}
                </h1>
                {isActive && (
                    <div className="hidden md:block absolute w-full z-20 -bottom-0.5 bg-proppoint-primaryBlue" style={{ height: "2px" }} />
                )}
            </div>
        </Link>
    );
}

const navLinks = [
    {
        route: "",
        title: "Home",
    },
    {
        route: "book_appointment",
        title: "Book Appointment",
    },
    {
        route: "about",
        title: "About Us",
    },
    {
        route: "contact",
        title: "Contact Us",
    },
];

const SmallNavbar = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev);
    }
    return (
        <React.Fragment>
            <div className='bg-white '>
                <button onClick={toggleNavbar} className='text-3xl p-4'>
                    { isNavbarOpen ? <IoMdClose /> : <IoMdMenu/> }
                </button>
                {
                   isNavbarOpen && 
                   navLinks.map((nav) => (
                    <Nav key={nav.route} route={nav.route} title={nav.title}/>
                ))
                }
            </div>

        </React.Fragment>
    );
}

function PatientNavbar() {
    const { pathname } = useLocation();

    

    return (
        <React.Fragment>

            <div className='hidden md:block'>
                <div className="relative overflow-x-scroll md:overflow-visible justify-center flex gap-6 py-2">
                    {navLinks.map((navLink) => (
                        <Nav key={navLink.route} route={navLink.route} title={navLink.title} />
                    ))}
                </div>

            </div>
            <div className='md:hidden'>
                <SmallNavbar/>
            </div>
        </React.Fragment>
    );
}

export default PatientNavbar;


