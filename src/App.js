
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import DashBoard from './Pages/DashBoard/DashBoard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/signin' element={<SignUp></SignUp>} ></Route>
      <Route path='/dashBoard' element={<DashBoard></DashBoard>} ></Route>
      <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
      <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
      <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
     </Routes>
    <Footer></Footer>
    </div>
    // hi how are you 
    
  );
}

export default App;
