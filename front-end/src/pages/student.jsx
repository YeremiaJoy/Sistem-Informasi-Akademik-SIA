import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import ModalStudent from '../component/ModalStudent';
import axios from "axios"
import { URL_API } from '../utils/constant';
import swal from "sweetalert";

export default class student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            majors: [],
            students: [],
            datas: [],
            index: 1,
            id: "",
            name: "",
            nim: "",
            major: "",
        }
    }

    componentDidMount() {
        axios.get(URL_API + "major").then((res) => {
            this.setState({ majors: res.data })
        })

        axios.get(URL_API + "student").then((res) => {
            this.setState({ students: res.data })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.PreventDefault()

        let indexID = 0
        this.state.students.map(student => indexID++)

        this.setState({
            datas: [
                ...this.state.datas,
                {
                    nim: this.state.nim,
                    name: this.state.name,
                    major: this.this.state.major,
                },
            ],
        });

        const dataStudent = {
            id: this.state.id,
            nim: this.state.nim,
            name: this.state.name,
            major: this.state.major
        }

        axios.post(URL_API+"student", dataStudent).then((res) =>{
            swal({
                title: "Sukses Add Student",
                text: "Sukses Add Student " + this.state.name,
                icon: "success",
                button: false,
                timer: 1500,
              });
        }).catch((error) => {
            console.log("Error yaa ", error);
            console.log("dataUser", dataStudent);
            swal({
              title: "Gagal Add Student",
              text: "Gagal Add Student",
              icon: "danger",
              button: false,
              timer: 1500,
            });
          });
        
          
          this.setState({
              show: false
            })
    }

    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })
    
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

        // const handleClose = () => this.setState({ show: false })
        // const handleShow = () => this.setState({ show: true })
        return (
            <Container style={style.container}>
                <Row style={style.judul}>
                    <Col xs={12} md={10}>
                        <h2>List Student</h2>
                        {/* {this.state.majors.map(major => <p>{major.code}</p> )}  */}
                    </Col>
                    <Col >
                        <Button variant="success" onClick={this.handleShow}>Add Student</Button>
                        <ModalStudent 
                            show={this.state.show} 
                            onHide={this.handleClose} 
                            Major={this.state.majors} 
                            HandleSubmit={this.handleSubmit} 
                            HandleChange={this.handleChange}/>
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
                        {this.state.students.map(student =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.nim}</td>
                                <td>{student.name}</td>
                                <td>{student.major}</td>
                                <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
