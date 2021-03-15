import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { NavbarData } from '../Navbar/NavbarComponentData'

const NavbarComponent = () => {
    const style={
        activeStyle: {
            color: '#ffffff',
            textDecoration: "none",
            paddingRight: '5px',
            paddingLeft: '5px'
        },
        navitem: {
        color: '#737373',
        fontWeight: 'bold',
        textDecoration: "none",
        paddingRight: '5px',
        paddingLeft: '5px'
    }
    };
        
 
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Sistem Informasi Akademik</Navbar.Brand>
            <Nav className="mr-auto">
                {NavbarData.map((val, key) => {
                    return (
                        <Link
                            key={key}
                            style={window.location.pathname == val.link ? style.activeStyle : style.navitem}
                            onClick={() => { window.location.pathname = val.link; }}
                        >
                            <div>{val.name}</div>
                        </Link>
                    )
                }
                )
                }
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;