import React, { Component } from "react";
// import { Card, Button, Tabs, Tab, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavbarComponent from "../component/Navbar/NavbarComponent";
import "./home.css";

class home extends Component {
  logout() {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    return (
      <>
        <NavbarComponent />
        <div className="hero-container">
          <h1>Sistem Informasi Akademik</h1>
          <p>
            <span>by:</span> Michael Septian & Yeremia Joy
          </p>
          {localStorage.getItem("id") ? (
            <>
              <p>{localStorage.getItem("name")}</p>
              <Button onClick={this.logout}>Logout</Button>
            </>
          ) : (
            <div className="hero-btns">
              <Button
                href="/loginStudent"
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Login as Student
              </Button>
              <Button
                href="/loginTeacher"
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                Login as Teacher
              </Button>
            </div>
          )}

          <div className="footer-login" style={{ color: "white" }}>
            © 2021, Sistem Informasi Akademik | create by Michael Septian &
            Yeremia Joy{" "}
          </div>
        </div>
      </>
    );
  }
}
export default home;
