import { Route, Routes, Outlet, } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import MissionVission from "./components/MissionVission";
import Loader from "./components/loader";
// import Partner from "./components/Partner";
import Footer from "./components/Footer";
// import Form from "./components/Form";
// import Testimonials from "./components/Testimonials";
// import Career from "./components/Career";
// import Client from "./components/Client";



function App() {
  return (
    <>
           <Loader/>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <About/>
              <Services />
              <MissionVission/>
              {/* <Client/> */}
              {/* <Partner/> */}
              {/* <Career /> */}
              <Contact />
              <Outlet />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <HomePage />
              <About/>
              <Services />
              <MissionVission/>
              {/* <Client/> */}
              {/* <Partner/> */}
              {/* <Career /> */}
              <Contact />
              <Outlet />
            </>
          }
        ></Route>
        <Route
          element={
            <>
              <Navbar />
              
             <Outlet />
             
              
            </>
          }
        >
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/career" element={<Career />}></Route> */}
          
          {/* <Route path="/client" element={<Client />}></Route> */}
          {/* <Route path="/partner" element={<Partner />}></Route> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
      </Routes>
      {/* <Form/> */}
      <Footer/>
      
    </>
  );
}

export default App;
