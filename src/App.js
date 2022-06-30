import './App.css';
import { Routes, Route } from "react-router-dom"
import Navber from './Pages/Shared/Navber/Navber';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>


    </div>
  );
}

export default App;
