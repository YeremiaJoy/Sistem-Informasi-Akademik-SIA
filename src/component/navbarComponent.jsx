import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const navbarComponents = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">SIA</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/student">Students</Nav.Link>
                    <Nav.Link href="/major">Major</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default navbarComponents;