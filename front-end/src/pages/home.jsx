import React, { Component } from "react";
// import { Card, Button, Tabs, Tab, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavbarComponent from "../component/Navbar/NavbarComponent";
import "./home.css";

class home extends Component {
  render() {
    // const style = {
    //   tab: {
    //     marginTop: "2%",
    //   },
    //   container: {
    //     padding: "0px",
    //   },
    // };
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
        </div>
        {/* <Container fluid style={style.container}>

          <Tabs defaultActiveKey="Major" id="uncontrolled-tab-example" style={style.tab}>
            <Tab eventKey="Major" title="Major">
              <Card.Body href="#major">
                <Card.Title >Major </Card.Title>
                <Card.Text>
                  Press the button to show any Major.
              </Card.Text>
                <Button href="/major" variant="primary">Show Major ..</Button>
              </Card.Body>
            </Tab>

            <Tab eventKey="Student" title="Student">
              <Card.Body>
                <Card.Title >Student </Card.Title>
                <Card.Text>
                  Press the button to show any Students.
              </Card.Text>
                <Button href="/student" variant="primary">Show Students ..</Button>
              </Card.Body>
            </Tab>

          </Tabs>
        </Container> */}
      </>
    );
  }
}
export default home;
