import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Main from "./Main";
import "./about.css";

function About() {
  return (
     <div>
        <div className="ImageContainer"> 
        <Navbar/> 
        {/* <Header/> */}
         {/* About Us */}
        </div>
       <Main/>
     </div>
  )
}

export default About