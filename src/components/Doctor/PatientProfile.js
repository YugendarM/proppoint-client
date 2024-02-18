import React from 'react'


function PanelItem({ title, subtitle, altText }) {
    return (
      <section className="flex flex-col justify-center items-start py-3.5 pr-20 pl-6 mt-3 ml-6 max-w-full bg-slate-50 leading-[150%] w-[684px] max-md:px-5">
        <h3 className="text-base font-medium text-neutral-900">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </section>
    );
  }

function PatientProfile() {
    const userInformation = [
        { title: "Date of Birth", subtitle: "Jan 03, 1992", altText: "" },
        { title: "Gender", subtitle: "Female", altText: "" },
        { title: "City", subtitle: "San Francisco, CA", altText: "" },
        { title: "Occupation", subtitle: "Software Engineer", altText: "" },
        { title: "Diabetes Status", subtitle: "Diabetes Type 2, 125 mg/dL glucose", altText: "" },
        { title: "Blood Pressure Status", subtitle: "Hypertension, 140/90 mmHg", altText: "" },
        { title: "History of Surgery", subtitle: "Knee Surgery, 2010", altText: "" },
        { title: "Phone number", subtitle: "(123) 456-7890", altText: "" },
        { title: "Email", subtitle: "morgan.greene@gmail.com", altText: "" },
      ];
    
      return (
        <main className="bg-white">
          <nav className="flex gap-5 max-md:flex-col">
            <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-12 pr-20 pl-9 w-full text-xl font-medium text-black bg-white rounded-none max-md:px-5">
                <a href="#overview" className="justify-center p-4 mt-80 text-blue-600 whitespace-nowrap border-b border-solid border-b-[color:var(--Primary-Blue,#2A66FE)] max-md:mt-10">Overview</a>
                <a href="#appointments" className="justify-center p-4 mt-4 whitespace-nowrap bg-white">Appointments</a>
                <a href="#patients" className="mt-8 ml-4 max-md:ml-2.5">Patients</a>
                <a href="#edit-availability" className="mt-12 ml-4 max-md:mt-10 max-md:ml-2.5">Edit Availability</a>
              </div>
            </aside>
            <section className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
              <header className="flex flex-col grow items-center px-20 pt-12 pb-1.5 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col px-5 mt-1.5 ml-6 max-w-full w-[684px]">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-1/5 max-md:ml-0 max-md:w-full">
                      <img srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1fdbffcfabf056b6440098569884754af546217301d4b5c9836db409f7327da?apiKey=2b3e736a90eb416685c77bf29db425a0&"alt="Morgan Greene" className="w-32 max-w-full aspect-square max-md:mt-4" />
                    </div>
                    <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center py-10 max-md:mt-4 max-md:max-w-full">
                        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">Morgan Greene</h1>
                        <p className="text-base leading-6 text-slate-500 max-md:max-w-full">morgan.greene@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mt-9 text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">Personal information</h2>
              </header>
              {userInformation.map((info) => (
                <PanelItem key={info.title} title={info.title} subtitle={info.subtitle} altText={info.altText} />
              ))}
            </section>
          </nav>
        </main>
      );
    }

export default PatientProfile;


