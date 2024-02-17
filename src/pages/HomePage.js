import React from 'react'
import MeditatingImg from '../assets/Images/MeditatingDoodle 1.png';


function HomePage() {
  return (
    <>
        <div className="container mx-auto px-4">
          

          <main className="mt-12">
            <section className="flex flex-col md:flex-row items-center ml-6">
              <div className="w-full md:w-3/5 text-center md:text-left">
                <h1 className="text-blue-600 text-7xl leading-none font-bold mb-3">Skip the Queue<br></br>Let AI Rescue!</h1>
                <p className="text-gray-700 font-medium md:w-11/12 text-2xl leading-tight mb-8">
                  Bid farewell to tedious queues & welcome a streamlined hospital appointments, just for you!
                </p>
                <a href="#" className="bg-blue-600 text-white text-xl font-medium px-8 py-2 rounded-2xl">Book Now!</a>
              </div>
              <div className="w-full md:w-1/2">
                <img src={MeditatingImg} alt="Hospital queue" className="w-full object-cover" />
              </div>
            </section>
          </main>
        </div>
    </>
  )
}

export default HomePage