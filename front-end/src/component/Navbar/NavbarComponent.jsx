import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { NavbarData } from '../Navbar/NavbarComponentData'
import "./NavbarComponent.css"

const NavbarComponent = () => {

return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Sistem Informasi Akademik</Navbar.Brand>
        <Nav>
            {NavbarData.map((val, key) => {
                return (
                    <Link
                        key={key} style={{textDecoration: "none"}}
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
            <Link to="/login" className="login">Login</Link>
            </Nav>
    </Navbar>
);
}

export default NavbarComponent;