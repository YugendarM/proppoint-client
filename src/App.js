import './App.css';
import SamplePage from './pages/SamplePage';
import SampleComponent from './components/SampleComponent';
import AppointmentHOC from './HOC/Appointment.HOC';
import { useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorSpecialization from './components/Appointment/DoctorSpecialization';
import DoctorList from './components/Appointment/DoctorList';
import TimeSlot from './components/Appointment/TimeSlot';
import PatientCredential from './components/Appointment/PatientCredential';
import BasicDetails from './components/Appointment/BasicDetails';
import DoctorHOC from './HOC/Doctor.HOC';

function App() {

  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/") return <HomePage/>
  
  return (
    <>
      
        <AppointmentHOC path={"/specialization"} exact component={DoctorSpecialization}/>
        <AppointmentHOC path={"/doctors/:specializationId"} exact component={DoctorList}/>
        <AppointmentHOC path={"/doctor/timeSlot/:doctorId"} exact component={TimeSlot}/>
        <AppointmentHOC path={"/patient_credential"} exact component={PatientCredential}/>
        <AppointmentHOC path={"/basic_details"} exact component={BasicDetails}/>

        {/* <DoctorHOC path={} exact component={}/> */}
    </>
  );
}

export default App;
