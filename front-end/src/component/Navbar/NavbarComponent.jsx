import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { NavbarData } from '../Navbar/NavbarComponentData'
import "./NavbarComponent.css"
import Login from "../Login/Login"

class NavbarComponent extends Component {
   constructor(props) {
       super(props);
       this.state = {
          LoginShow: false
       }
   }
   render() {
      let loginClose = () => this.setState({ LoginShow: false });
      return (
         <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/">Sistem Informasi Akademik</Navbar.Brand>
            <Nav>
               {NavbarData.map((val, key) => {
                  return (
                     <Link
                        key={key} style={{ textDecoration: "none" }}
                        to={val.link} className={window.location.pathname == val.link ? "activeStyle" : "navitem"}
                        onClick={() => { window.location.pathname = val.link; }}
                     >
                        <div>{val.name}</div>
                     </Link>
                  )
               }
               )
               }
               <div className="batas"></div>
               <Link className="login" onClick={() => this.setState({
                  LoginShow: true
               })}>Login</Link>
               <Login 
               show={this.state.LoginShow}
               onHide={loginClose}
               />
               <Link to="/register" className="register">Register</Link>
            </Nav>
         </Navbar>
      );
   }
}

export default NavbarComponent;