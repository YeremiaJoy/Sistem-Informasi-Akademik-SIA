import React, { Component } from "react";
import axios from "axios";
import { URL_API } from "../utils/constant";
import swal from "sweetalert";
import DeleteIcon from "@material-ui/icons/Delete";
import NavbarComponent from "../component/Navbar/NavbarComponent";
import ModalTeacher from "../component/Teacher/ModalTeacher";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

class teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: " ",
      isUpdate: false,
      teachers: [],
      majors: [],
      selectMajor: [],
      Teacher: {
        id: " ",
        name: " ",
        major: " ",
        password: " ",
      },
    };
  }

  componentDidMount() {
    axios.get(URL_API + "findAllTeacher").then((res) => {
      this.setState({ teachers: res.data });
    });

    axios.get(URL_API + "findAllMajor").then((res) => {
      this.setState({ majors: res.data });
    });

    axios.get(URL_API + "findAllMajorByStatus").then((res) => {
      this.setState({ selectMajor: res.data });
    });
  }

  handlechange = (event) => {
    let addTeacherNew = { ...this.state.Teacher };
    addTeacherNew[event.target.name] = event.target.value;
    // console.log(addTeacherNew);

    this.setState({
      Teacher: addTeacherNew,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.isUpdate) {
      axios
        .post(
          URL_API + `updateTeacher/${this.state.Teacher.id}`,
          this.state.Teacher
        )
        .then((res) => {
          this.setState({
            show: false,
            isUpdate: false,
          });
          axios.get(URL_API + "findAllTeacher").then((res) => {
            this.setState({ teachers: res.data });
          });
          swal({
            title: "Sukses Update Teacher",
            text: "Sukses Update Teacher " + this.state.Teacher.name,
            icon: "success",
            button: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log("Error yaa ", error);
          swal({
            title: "Failed Update Teacher",
            text: "Failed Update Teacher",
            icon: "error",
            button: false,
            timer: 1500,
          });
        });
    } else {
      axios
        .post(URL_API + "addTeacher", this.state.Teacher)
        .then((res) => {
          this.setState({
            show: false,
            isUpdate: false,
          });
          axios.get(URL_API + "findAllTeacher").then((res) => {
            this.setState({ teachers: res.data });
          });
          swal({
            title: "Sukses Add Teacher",
            text: "Sukses Add Teacher " + this.state.Teacher.name,
            icon: "success",
            button: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log("Error yaa ", error);
          swal({
            title: "Failed Add Teacher",
            text: "Failed Add Teacher",
            icon: "error",
            button: false,
            timer: 1500,
          });
        });
    }
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  deleteData = (idTeacher) => {
    axios
      .delete(URL_API + `deleteTeacher/${idTeacher}`)
      .then((res) => {
        this.setState({
          show: false,
          isUpdate: false,
        });
        axios.get(URL_API + "findAllTeacher").then((res) => {
          this.setState({ teachers: res.data });
        });
        swal({
          title: "Sukses Delete Teacher",
          text: "Sukses Delete Teacher ",
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
        swal({
          title: "Failed Delete Teacher",
          text: "Failed Delete Teacher",
          icon: "error",
          button: false,
          timer: 1500,
        });
      });
  };
  render() {
    const style = {
      button_update: {
        textAlign: "center",
        marginRight: "10px",
      },
      container: {
        marginTop: "70px",
        fontFamily: "sans-serif",
      },
      judul: {
        marginBottom: "20px",
      },
    };

    return (
      <div>
        <NavbarComponent />
        <Container style={style.container}>
          <Row style={style.judul}>
            <Col xs={12} md={10}>
              <h2>List Teacher</h2>
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() =>
                  this.setState({
                    show: true,
                    isUpdate: false,
                    Teacher: {
                      id: "",
                      name: "",
                      major: "1",
                    },
                  })
                }
              >
                {" "}
                Add Teacher
              </Button>
              <ModalTeacher
                show={this.state.show}
                onHide={this.handleClose}
                major={this.state.selectMajor}
                teacher={this.state.Teacher}
                handleSubmit={this.handleSubmit}
                handlechange={this.handlechange}
              />
            </Col>
          </Row>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Major</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teachers.map((teacher, index) => (
                <tr key={teacher.id}>
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  {this.state.majors.map((major) =>
                    major.id === teacher.major.id ? <td>{major.name}</td> : ""
                  )}
                  <td>
                    <Button
                      variant="warning"
                      style={style.button_update}
                      onClick={() => {
                        this.setState({
                          show: true,
                          isUpdate: true,
                          Teacher: {
                            id: teacher.id,
                            name: teacher.name,
                            major: teacher.major.id,
                            password: teacher.password,
                          },
                        });
                      }}
                    >
                      Update
                    </Button>

                    <Button
                      variant="danger"
                      style={style.button_delete}
                      onClick={() => this.deleteData(teacher.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default teacher;
