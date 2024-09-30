import React from "react";
import EnquiryForm from "./EnquiryForm";
import HomeTab from "./HomeTab";
import "./NavBar.css";
import Sider from "./Sider";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="navbar slide-down">
        <div className="logo">DataScience Pro</div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="navtext">
              Home
            </a>
          </li>
          <li>
            <a href="#home" className="navtext">
              About us
            </a>
          </li>
          <li>
            <a href="#home" className="navtext">
              Course
            </a>
          </li>
          <li>
            <a href="#home" className="navtext">
              Our Blog
            </a>
          </li>
          <li>
            <a href="#home" className="navtext">
              Enquiry
            </a>
          </li>
        </ul>
      </nav>

      <HomeTab />
      <Sider />
      <EnquiryForm />

      <footer>
        <p>&copy; 2024 DataSciencePro. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default NavBar;
