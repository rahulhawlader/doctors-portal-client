import './App.css';
import { Routes, Route } from "react-router-dom"
import Navber from './Pages/Shared/Navber/Navber';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Appoinment from './Pages/Appointment/Appointment/Appoinment';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/signUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto py-12'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={
          <RequireAuth>

            <Appoinment />
          </RequireAuth>

        }>

        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>

      </Routes>


    </div>
  );
}

export default App;
