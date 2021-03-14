import axios from "axios"
import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import ModalStudent from '../component/ModalStudent';
import { URL_API } from '../utils/constant'
import swal from "sweetalert";

class student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      majors: [],
      students: [],
      addStudent: {
        id: null,
        name: null,
        nim: null,
        major: null
      }
    }
  }

  getShowAPI = () => {
    axios.get(URL_API + "major").then((res) => {
      this.setState({ majors: res.data })
    })

    axios.get(URL_API + "student").then((res) => {
      this.setState({ students: res.data })
    })
  }

  handlechange = (event) => {
    let addStudentNew = { ...this.state.addStudent };
    addStudentNew[event.target.name] = event.target.value;
    this.setState({
      addStudent: addStudentNew
    })
  }

  componentDidMount() {
    this.getShowAPI();
  }

  handlesubmit = (e) => {
    e.preventDefault()
    axios.post(URL_API + "student", this.state.addStudent).then((res) => {
      this.getShowAPI();
      swal({
        title: "Sukses Add Student",
        text: "Sukses Add Student " + this.state.addStudent.name,
        icon: "success",
        button: false,
        timer: 1500,
      });
    }).catch((error) => {
      console.log("Error yaa ", error);
      console.log("dataUser", this.state.addStudent);
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

  deleteData = (e) => {
    var id = e.target.id

    axios.delete(URL_API+`student/`, id).then(res => {
        
        swal({
            title: "Sukses hapus Student",
            text: "Sukses hapus Student ",
            icon: "success",
            button: false,
            timer: 1500,
          });
        }).catch((error) => {
          console.log("Error yaa ", error);
          console.log("dataUser");
          swal({
            title: "Gagal hapus Student",
            text: "Gagal hapus Student",
            icon: "danger",
            button: false,
            timer: 1500,
          });
        });
  }

  render() {
    const style = {
      button_update: {
        textAlign: "center",
        marginRight: "10px"
      },
      container: {
        marginTop: "70px"
      },
      judul: {
        marginBottom: "20px"
      }
    }
    return (
      <Container style={style.container}>
        <Row style={style.judul}>
          <Col xs={12} md={10}>
            <h2>List Student</h2>
          </Col>
          <Col >
            <Button variant="success" onClick={this.handleShow}>Add Student</Button>
            <ModalStudent
              show={this.state.show}
              onHide={this.handleClose}
              major={this.state.majors}
              handlesubmit={this.handlesubmit}
              handlechange={this.handlechange} />
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
                <td><Button variant="warning" style={style.button_update}>Update</Button>
                <Button variant="danger" id= {student.id} onClick={this.deleteData}>Delete</Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    )
  }
}
export default student;