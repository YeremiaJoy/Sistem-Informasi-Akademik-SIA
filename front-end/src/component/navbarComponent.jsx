import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import {Link} from 'react-router-dom'

class navbarComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [
                {
                    id: 1,
                    name: "Home",
                    to: "/",
                    className: "Navbar"
                },
                {
                    id: 2,
                    name: "Major",
                    to: "/major",
                    className: "side_nav_item"
                },
                {
                    id: 3,
                    name: "Student",
                    to: "/student",
                    className: "side_nav_item"
                }
            ],
            activeLink: 1
        };
    }

    handleClick = id => {
        console.log(name);
        console.log(this.state.activeLink);
        this.setState({ activeLink: id });
    };

    render() {
        const activeStyle = {
                color: '#ffffff',
                textDecoration: "none",
                paddingRight: '5px',
                paddingLeft: '5px'
        }
        
        const navitem = {
            Link: {
                color: '#737373',
                fontWeight: 'bold',
                textDecoration: "none",
                paddingRight: '5px',
                paddingLeft: '5px'
            }
        }
        
        const { links, activeLink } = this.state;
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Sistem Informasi Akademik</Navbar.Brand>
                    <Nav className="mr-auto">
                        {links.map(link => {
                            return (
                                <Link key={link.id} to={link.to} onClick={() => this.handleClick(link.id)}
                                    style={
                                        (link.id === activeLink ? activeStyle : navitem.Link )}
                                    >
                                    {link.name} </Link>

                            );
                        }
                        )
                        }
                    </Nav>
                </Navbar>
            </>
        )
    }
}

{/* <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script> */ }

export default navbarComponents;