import logo from './logo.svg';
import './App.css';
import SamplePage from './pages/SamplePage';
import SampleComponent from './components/SampleComponent';
import AppointmentHOC from './HOC/Appointment.HOC';
import { useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorSpecialization from './components/Appointment/DoctorSpecialization';

function App() {

  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/") return <HomePage/>
  
  return (
    <>
      
        <AppointmentHOC path={"/appointment"} exact component={DoctorSpecialization}/>
        <AppointmentHOC path={"/appointment/doctor/:id"} exact component={SampleComponent}/>
        {/* <AppointmentHOC path={"/appointment/doctor/slot"} exact component={}/> */}
    </>
  );
}

export default App;
