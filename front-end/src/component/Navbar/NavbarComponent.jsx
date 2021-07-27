import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { NavbarData } from '../Navbar/NavbarComponentData'
import "./NavbarComponent.css"

class NavbarComponent extends Component {
   constructor(props) {
       super(props);
       this.state = {
          LoginShow: false
       }
   }
   render() {
      // let loginClose = () => this.setState({ LoginShow: false });
      return (
         <Navbar className="navbar" bg="dark" variant="dark" style={{fontFamily: 'sans-serif', fontSize: '0.875rem', lineHeight: '1.5rem', letterSpacing: 0}}>
            <Navbar.Brand href="/" style={{paddingRight: '1rem', paddingLeft: '0.5rem' }}>SIA</Navbar.Brand>
            <Nav>
               {NavbarData.map((val, key) => {
                  return (
                     <Link
                        key={key} style={{ textDecoration: "none" }}
                        // eslint-disable-next-line
                        to={val.link} className={window.location.pathname == val.link ? "activeStyle" : "navitem"}
                        onClick={() => { window.location.pathname = val.link; }}
                     >
                        <div>{val.name}</div>
                     </Link>
                  )
               }
               )
               }
               {/* <div className="batas"></div> */}
               {/* <Link to="/login" className="login">Login</Link> */}
            </Nav>
         </Navbar>
      );
   }
}

export default NavbarComponent;