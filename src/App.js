
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import DashBoard from './Pages/DashBoard/DashBoard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Enroll from './Pages/Enroll/Enroll';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Career from './Pages/Career/Career';
import EnrollDetails from './Pages/Enroll/EnrollDetails';



function App() {
  return (
    <div className="font-[montserrat] bg-primary text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/dashBoard' element={<DashBoard></DashBoard>} ></Route>
        <Route path='/enroll' element={<Enroll></Enroll>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/career' element={<Career></Career>} ></Route>
        <Route path='/enrolldetails' element={<EnrollDetails></EnrollDetails>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
    // hi how are you 

  );
}

export default App;
