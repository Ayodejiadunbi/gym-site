import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: "red" }}>
              <i className="bi bi-geo-alt-fill text-white"></i>
              Shape
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item ">
          <Link to="/" className="nav-link " href="#"style={{color:"white"}} >HOME</Link>
        </li>
        <li className="nav-item">
          <Link to= "about/" className="nav-link " href="#"style={{color:"white"}}>ABOUT US</Link>
        </li>
       
        <li className="nav-item">
          <Link to="/services" className="nav-link" href="#"style={{color:"white"}} >SERVICES</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallary"className="nav-link" href="#"style={{color:"white"}}>GALLARY</Link>
        </li>
        <li className="nav-item">
          <Link to= "/price"className="nav-link" href="#"style={{color:"white"}}>PRICING</Link>
        </li>
        <li className="nav-item">
          <Link to = "contact"className="nav-link" href="#"style={{color:"white"}}>CONTACT</Link>
        </li>
      </ul>
   
    </div>
          </div>
        
      </nav>
      {/* Outlet make the other componenet to come under it   */}
      <Outlet /> 





    </>
  );
};

export default Navbar;
