import './App.css';
import SamplePage from './pages/SamplePage';
import SampleComponent from './components/SampleComponent';
import AppointmentHOC from './HOC/Appointment.HOC';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorSpecialization from './components/Appointment/DoctorSpecialization';
import DoctorList from './components/Appointment/DoctorList';
import TimeSlot from './components/Appointment/TimeSlot';
import PatientCredential from './components/Appointment/PatientCredential';
import PatientsList from './components/Doctor/PatientsList';
import BasicDetails from './components/Appointment/BasicDetails';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DoctorProfileUpdate from './components/Doctor/DoctorProfileUpdate';
import DoctorSlotUpdate from './components/Doctor/DoctorSlotUpdate';
import PatientNavbar from './components/Navbar/PatientNavbar';
import PatientProfile from './components/Doctor/PatientProfile';

function App() {

  const pathName = useLocation();
  const currentPath = pathName.pathname;

  // if (currentPath === "/") return <HomePage/>
  
  return (
    <>
      
        {/* <AppointmentHOC path={"/home"} exact component={HomePage}/>
        <AppointmentHOC path={"/about"} exact component={AboutPage}/>
        <AppointmentHOC path={"/contact"} exact component={ContactPage}/>

        <AppointmentHOC path={"/specialization"} exact component={DoctorSpecialization}/>

        <AppointmentHOC path={"/:specializationType/doctors"} exact component={DoctorList}/>
        <AppointmentHOC path={"/:doctorName/time_slot"} exact component={TimeSlot}/>

        <AppointmentHOC path={"/patient_credential"} exact component={PatientCredential}/>
        <AppointmentHOC path={"/basic_details"} exact component={BasicDetails}/>

        <DoctorHOC path={"/doctor/login"} exact component={PatientsList}/>
        <DoctorHOC path={"/doctor/"} exact component={DoctorDashboard}/>
        <DoctorHOC path={"/doctor/update_profile"} exact component={DoctorProfileUpdate}/>

        <DoctorHOC path={"/doctor/update_timeslot"} exact component={DoctorSlotUpdate}/>
        <DoctorHOC path={"/doctor/patients_list/:slotid"} exact component={PatientsList}/>
        <DoctorHOC path={"/doctor/patients_list/:patientid"} exact component={PatientsList}/> */}
        
        {/* <DoctorHOC path={"/doctor/patients/:patientId"} exact component={PatientsList}/> */}



        
        

        <Routes>
            <Route path={"/"} exact element={<HomePage/>}/>
            <Route path={"/about"} exact element={<AboutPage/>}/>
            <Route path={"/contact"} exact element={<ContactPage/>}/>

            <Route path={"/specialization"} exact element={<DoctorSpecialization/>}/>
            <Route path={"specialization/:specializationType/doctors"} exact element={<DoctorList/>}/>
            <Route path={"/:doctorName/time_slots"} exact element={<TimeSlot/>}/>

            <Route path={"/patient_credential"} exact element={<PatientCredential/>}/>
            <Route path={"/basic_details"} exact element={<BasicDetails/>}/>

            <Route path={"/doctor/login"} exact element={<PatientsList/>}/>
            <Route path={"/doctor/"} exact element={<DoctorDashboard/>}/>
            <Route path={"/doctor/update_profile"} exact element={<DoctorProfileUpdate/>}/>

            <Route path={"/doctor/update_timeslot"} exact element={<DoctorSlotUpdate/>}/>
            {/* <Route path={"/doctor/patients_list/"} exact element={<PatientsList/>}/> */}
            <Route path={"/doctor/patients_list/:patientid"} exact element={<PatientProfile/>}/>
          </Routes>
    </>
  );
}

export default App;
