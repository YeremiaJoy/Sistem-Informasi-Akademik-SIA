import React, { Component } from "react";
// import { Card, Button, Tabs, Tab, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavbarComponent from "../component/Navbar/NavbarComponent";
import "./home.css";

class home extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <div className="hero-container">
          <video src="/videos/video-1.mp4" autoPlay loop muted />
          <h1>Sistem Informasi Akademik</h1>
          <p>
            <span>by:</span> Michael Septian & Yeremia Joy
          </p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Login as Student
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Login as Teacher
            </Button>
          </div>
          <div className="footer-login" style={{color: "white"}}>© 2021, Sistem Informasi Akademik | create by Michael Septian & Yeremia Joy </div>
        </div>        
      </>
    );
  }
}
export default home;
