

import{Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage/index.jsx'
import Login from './pages/Login/index.jsx'
import SignUp from './pages/Signup/index.jsx'
import Nav from './components/Nav/Nav.jsx'
import ContactUs from './pages/ContactUs/index.jsx'




export default function App() {
  
  return (
    <>
     <div className="App">
      <Nav/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<SignUp/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
     </Routes>
     </div>
  
     </>
     
     
  );
}
