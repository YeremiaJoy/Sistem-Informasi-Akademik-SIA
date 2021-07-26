import React, { Component } from "react";
import axios from "axios";
import { URL_API } from "../utils/constant";
import swal from "sweetalert";
import DeleteIcon from "@material-ui/icons/Delete";
import NavbarComponent from "../component/Navbar/NavbarComponent";
import ModalCourse from "../component/Course/ModalCourse";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

class course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCourseShow: false,
      courses: [], //database json fake api
      majors: [],
      teachers: [],
      selectMajor: [],
      Course: {
        //add data baru
        id: "",
        name: "",
        semester: 0,
        sks: 0,
        major: "",
        teacher: "",
      },
      isUpdate: false,
    };
  }

  componentDidMount = () => {
    axios.get(URL_API + "findAllCourseByStatus").then((res) => {
      this.setState({ courses: res.data });
    });

    axios.get(URL_API + "findAllTeacher").then((res) => {
      this.setState({ teachers: res.data });
    });

    axios.get(URL_API + "findAllMajor").then((res) => {
      this.setState({ majors: res.data });
    });

    axios.get(URL_API + "findAllMajorByStatus").then((res) => {
      this.setState({ selectMajor: res.data });
    });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handlechange = (event) => {
    let addCourseNew = { ...this.state.Course };
    addCourseNew[event.target.name] = event.target.value;
    console.log(addCourseNew);

    this.setState({
      Course: addCourseNew,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.isUpdate) {
      axios
        .post(
          URL_API + `updateCourse/${this.state.Course.id}`,
          this.state.Course
        )
        .then((res) => {
          this.setState({
            show: false,
            isUpdate: false,
          });
          axios.get(URL_API + "findAllCourseByStatus").then((res) => {
            this.setState({ courses: res.data });
          });
          swal({
            title: "Sukses Update Course",
            text: "Sukses Update Course " + this.state.Course.name,
            icon: "success",
            button: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log("Error yaa ", error);
          swal({
            title: "Failed Update Course",
            text: "Failed Update Course",
            icon: "error",
            button: false,
            timer: 1500,
          });
        });
    } else {
      axios
        .post(URL_API + "addCourse", this.state.Course)
        .then((res) => {
          this.setState({
            show: false,
            isUpdate: false,
          });
          axios.get(URL_API + "findAllCourseByStatus").then((res) => {
            this.setState({ courses: res.data });
          });
          swal({
            title: "Sukses Add Course",
            text: "Sukses Add Course " + this.state.Course.name,
            icon: "success",
            button: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log("Error yaa ", error);
          swal({
            title: "Failed Add Course",
            text: "Failed Add Course",
            icon: "error",
            button: false,
            timer: 1500,
          });
        });
    }
  };

  deleteData = (idCourse) => {
    axios
      .delete(URL_API + `deleteCourse/${idCourse}`)
      .then((res) => {
        this.setState({
          show: false,
          isUpdate: false,
        });
        axios.get(URL_API + "findAllCourseByStatus").then((res) => {
          this.setState({ courses: res.data });
        });
        swal({
          title: "Sukses Delete Course",
          text: "Sukses Delete Course ",
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
        swal({
          title: "Failed Delete Course",
          text: "Failed Delete Course",
          icon: "error",
          button: false,
          timer: 1500,
        });
      });
  };

  chooseSemester = () => {
    let showSemester = [];
    for (let index = 1; index < 9; index++) {
      showSemester.push(<option value={index}>{index}</option>);
    }

    return showSemester;
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
              <h2>List Course</h2>
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() =>
                  this.setState({
                    show: true,
                    isUpdate: false,
                    Course: {
                      id: "",
                      name: "",
                      semester: 1,
                      sks: 0,
                      major: "1",
                      teacher: "1",
                    },
                  })
                }
              >
                {" "}
                Add Course
              </Button>
              <ModalCourse
                show={this.state.show}
                onHide={this.handleClose}
                major={this.state.selectMajor}
                teachers={this.state.teachers}
                course={this.state.Course}
                semester={this.chooseSemester}
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
                <th>Semester</th>
                <th>SKS</th>
                <th>Major</th>
                <th>Teacher</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map((course, index) => (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.semester}</td>
                  <td>{course.sks}</td>
                  {this.state.majors.map((major) =>
                    major.id === course.major.id ? <td>{major.name}</td> : ""
                  )}
                  {this.state.teachers.map((teacher) =>
                    teacher.id === course.teacher.id ? (
                      <td>{teacher.name}</td>
                    ) : (
                      ""
                    )
                  )}
                  <td>
                    <Button
                      variant="warning"
                      style={style.button_update}
                      onClick={() => {
                        this.setState({
                          show: true,
                          isUpdate: true,
                          Course: {
                            id: course.id,
                            name: course.name,
                            semester: course.semester,
                            sks: course.sks,
                            major: course.major.id,
                            teacher: course.teacher.id,
                          },
                        });
                      }}
                    >
                      Update
                    </Button>

                    <Button
                      variant="danger"
                      style={style.button_delete}
                      onClick={() => this.deleteData(course.id)}
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
export default course;
