import React from 'react'
import { useLocation,useNavigate } from "react-router-dom";
import menu from "../../Screens/Home/Assest/menubtn.png";
import molaris from "../../Screens/Home/Assest/molaris.png";
function Navbar() {

    let navigate = useNavigate();
    const gotocontact = () => {
      navigate("/contact");
    };
    let About = useLocation();
    const gotoabout = () => {
      navigate("/About");
    };

    let Blog = useLocation();
    const gotoblog = () => {
      navigate("/Blog");
    };
    
    let Career = useLocation();
    const gotocareer = () => {
      navigate("/career");
    };

    let Home = useLocation();
    const gotohome = () => {
      navigate("/Home");
    };

    let Service = useLocation();
    const gotoservice = () => {
      navigate("/service");
    };
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="" onClick={() => gotohome()}><img
          src={molaris}
          width="130"
          height="60"
       alt="image can't show for slow internet connecttion" /></a>
        <button class="navbar-toggler menuicon" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"> <img src={menu}/></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href=""  onClick={() => gotoabout()}>
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="" 
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => gotoservice()}>
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Accounting Outsource
                </a>
                <a className="dropdown-item" href="#">
                  Cloud Services
                </a>
                <a className="dropdown-item" href="#">
                  Robotics Process Automation
                </a>
                <a className="dropdown-item" href="#">
                  DevOps As A Service
                </a>
                <a className="dropdown-item" href="#">
                  Web & App Development
                </a>
                <a className="dropdown-item" href="#">
                  Digital Marketing
                </a>
              </div>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href=""  onClick={() => gotoblog()}>
                BLOG
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href=""  onClick={() => gotocareer()}>
                CAREER
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link"  href="" onClick={() => gotocontact()}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar