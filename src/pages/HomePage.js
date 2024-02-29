import React from "react";
import MeditatingImg from "../assets/Images/MeditatingDoodle 1.png";

function HomePage() {
  return (
    <React.Fragment>
        <main className="container mx-auto lg:px-20 flex items-center" style={{height:"85vh"}}>
          <section className="flex flex-col-reverse lg:flex-row items-center ">
            <div className="w-full md:w-3/5 text-center lg:text-left flex flex-col gap-8 items-center lg:items-start">
              <h1 className=" text-blue-600 text-3xl lg:text-7xl md:text-4xl font-bold ">Skip the Queue... <br/>Let the AI Rescue!</h1>
              <p className="text-gray-700 font-medium md:w-11/12 text-2xl px-4 lg:px-0">Bid farewell to tedious queues & welcome a streamlined hospital appointments, just for you!</p>
              <button onClick={() => window.location.href = "/book_appointment"} className="w-52 bg-blue-600 text-white text-xl font-medium px-8 py-3 rounded-full">Book Now!</button>
            </div>
            <div className="md:px-10 lg:px-0 w-full lg:w-1/2">
              <img src={MeditatingImg} alt="Hospital queue" className="w-full object-cover"/>
            </div>
          </section>
        </main>
    </React.Fragment>
  );
}

export default HomePage;
