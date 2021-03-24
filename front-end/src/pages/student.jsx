import axios from "axios"
import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import ModalStudent from '../component/Student/ModalStudent';
import { URL_API } from '../utils/constant'
import swal from "sweetalert";
import DeleteIcon from '@material-ui/icons/Delete';

class student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: null,
      isUpdate: false,
      majors: [],
      students: [],
      addStudent: {
        id: ' ',
        name: ' ',
        nim: ' ',
        major: ' '
      }
    };
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
    // let timestamp = new Date().getTime();
    if(!this.state.isUpdate){
      addStudentNew['id'] = '';
    }
    this.setState({
      addStudent: addStudentNew
    })
  }

  componentDidMount() {
    this.getShowAPI();
  }

  handleSubmit = (e) => {
    if(this.state.isUpdate){
      this.putDataToAPI(); 
    }else{
      this.postDataToAPI();
    }
    e.preventDefault();
  }

  putDataToAPI = () => {
    axios.put(URL_API + `student/${this.state.addStudent.id}`, this.state.addStudent).then((res) => {
      this.getShowAPI();
      this.setState({
        show: false,
        isUpdate: false
      })
      swal({
        title: "Sukses Update Student",
        text: "Sukses Update Student " + this.state.addStudent.name,
        icon: "success",
        button: false,
        timer: 1500,
      });
    }).catch((error) => {
      console.log("Error yaa ", error);
      console.log("dataUser", this.state.addStudent);
      swal({
        title: "Gagal Update Student",
        text: "Gagal Update Student",
        icon: "danger",
        button: false,
        timer: 1500,
      });
    });
  }

  postDataToAPI = () => {
    axios.post(URL_API + "student", this.state.addStudent).then((res) => {
      this.getShowAPI();
      this.setState({
        show: false
      })
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
  }

  handleClose = () => this.setState({ show: false })
  handleShow = () => this.setState({ show: true })

  deleteData = (data) => {
    axios.delete(URL_API + `student/${data}`).then((res) => {
      this.getShowAPI();
      swal({
        title: "Sukses Delete Student",
        text: "Sukses Delete Student " + this.state.addStudent.name,
        icon: "success",
        button: false,
        timer: 1500,
      });
    }).catch((error) => {
      console.log("Error yaa ", error);
      console.log("dataUser", data);
      swal({
        title: "Gagal Delete Major",
        text: "Gagal Delete Major",
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
          {this.state.majors.slice(0,1).map((major,index) => {
            if(index==0){
              this.state.value = major.major_name 
            }
          })}
            <Button variant="success" onClick={() => 
                this.setState({show: true, addStudent: {
                id: '',
                name: '',
                nim: '',
                major: this.state.value
                }
              })}                              
              > Add Student</Button>

            <ModalStudent
              show={this.state.show}
              onHide={this.handleClose}
              major={this.state.majors}
              student={this.state.addStudent}
              handleSubmit={this.handleSubmit}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student,index) =>
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.nim}</td>
                <td>{student.name}</td>
                <td>{student.major}</td>
                <td><Button variant="warning" style={style.button_update} onClick={()=>{
                  this.setState({ show: true, isUpdate:true, addStudent: student});
                }}>Update</Button>

                <Button variant="danger" style={style.button_delete} onClick={() =>  
                  this.deleteData(student.id) }><DeleteIcon />
                </Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    )
  }
}
export default student;