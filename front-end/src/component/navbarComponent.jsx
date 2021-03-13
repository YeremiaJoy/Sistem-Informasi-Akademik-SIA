import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import $ from 'jquery'

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
            activeLink: null
        };
    }

    handleClick = id => {
        console.log(this.state)
        console.log(id)
        this.setState({ activeLink: id });
    };

    render() {
        const { links, activeLink } = this.state;
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Sistem Informasi Akademik</Navbar.Brand>
                    <Nav className="mr-auto">
                        {links.map(link => {
                            return (
                                <Nav.Link key={link.id} href={link.to} onClick={() => this.handleClick.bind(link.id)}
                                    className={
                                        link.className +
                                        (link.id === activeLink ? "active" : "")
                                    } > {link.name} </Nav.Link>

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