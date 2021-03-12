import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import ModalStudent from '../component/ModalStudent';

export default class student extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }
    render() {
        const style = {
            button_update: {
                textAlign: "center"
            },
            container: {
                marginTop: "70px"
            },
            judul: {
                marginBottom: "20px"
            }
        }

        const handleClose = () => this.setState({show : false})
        const handleShow = () => this.setState({show : true})
        return (
            <Container style={style.container}>
                <Row style={style.judul}>
                    <Col xs={12} md={10}>
                        <h2>List Student</h2>
                    </Col>
                    <Col >
                        <Button variant="success" onClick={handleShow}>Add Student</Button>
                        <ModalStudent show={this.state.show} onHide={handleClose}/> 
                        {/* <Modal
                            show={this.state.show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                I will not close if you click outside me. Don't even try to press
                                escape key.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal> */}
                    </Col>
                </Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nim</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>666666</td>
                            <td>Otto</td>
                            <td>Desain Komunikasi</td>
                            <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>333333</td>
                            <td>Thornton</td>
                            <td>Informartika</td>
                            <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>222222</td>
                            <td>Larry the Bird</td>
                            <td>Menegement</td>
                            <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}
