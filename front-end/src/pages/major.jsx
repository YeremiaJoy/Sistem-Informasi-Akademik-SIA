import axios from 'axios';
import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'
import ModalMajor from '../component/ModalMajor'
import { URL_API } from '../utils/constant'

class major extends Component {
    constructor(props){
        super(props);
        this.state = {
            addModalShow: false,
            majorPost: {
                id: '',
                code: '',
                major_name: ''
            }

        }
    }

    getPostAPI = () => {
        axios.get(URL_API+"major").then((res)=> {
            this.setState({
                majorPost: res.data
            })
        })
    }

    handleFormChange = (e) => {
        
    }
    
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
        let addModalCLose= () => this.setState({addModalShow:false});

        return (
            <Container style={style.container}>
                <Row style={style.judul}>
                    <Col xs={12} md={10}>
                        <h2>List Major</h2>
                    </Col>
                    <Col >
                        <Button variant="success" onClick={() => this.setState({addModalShow:true})} >Add Major</Button>
                        <ModalMajor show={this.state.addModalShow} onHide={addModalCLose}/>
                        
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

export default major;