import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'

export default class major extends Component {
    render() {
        const style = {
            button_delete: {
                textAlign: "center"
            },
            container: {
                marginTop: "70px"
            },
            judul :{
                marginBottom: "20px"
            }
        }
        return (
            <Container style={style.container}>
                <Row style={style.judul}>
                    <Col xs={12} md={10}>
                        <h2>List Major</h2>
                    </Col>
                    <Col >
                        <Button variant="success">Add Major</Button>
                    </Col>
                </Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Major</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Informatika</td>
                            <td><Button variant="danger" style={style.button_danger}>Update</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Management</td>
                            <td><Button variant="danger" style={style.button_danger}>Update</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}
