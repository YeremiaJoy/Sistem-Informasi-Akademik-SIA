import React, { Component } from "react";
import axios from "axios";
import { URL_API } from "../utils/constant";
import swal from "sweetalert";
import NavbarComponent from "../component/Navbar/NavbarComponent";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

class enroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [], //database json fake api
      enrolls: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        URL_API +
          `findAllCourseByMajor/${localStorage.getItem(
            "majorId"
          )}/${localStorage.getItem("id")}`
      )
      .then((res) => {
        this.setState({ courses: res.data });
      });

    axios
      .get(URL_API + `findAllEnrollByStudent/${localStorage.getItem("id")}`)
      .then((res) => {
        this.setState({ enrolls: res.data });
      });
  };

  ambil = (idStudent, idCourse, course) => {
    const data = {
      student: idStudent,
      course: idCourse,
    };

    axios
      .post(URL_API + `enroll`, data)
      .then((res) => {
        axios
          .get(
            URL_API +
              `findAllCourseByMajor/${localStorage.getItem(
                "majorId"
              )}/${localStorage.getItem("id")}`
          )
          .then((res) => {
            this.setState({ courses: res.data });
          });
        axios
          .get(URL_API + `findAllEnrollByStudent/${localStorage.getItem("id")}`)
          .then((res) => {
            this.setState({ enrolls: res.data });
          });
        swal({
          title: "Sukses",
          text: "Sukses Mengambil Mata Pelajaran " + course,
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
        swal({
          title: "Failed",
          text: "Gagal Mengambil Mata Pelajaran " + course,
          icon: "error",
          button: false,
          timer: 1500,
        });
      });
  };

  batal = (idEnroll, course) => {
    axios
      .delete(URL_API + `deleteEnroll/${idEnroll}`)
      .then((res) => {
        axios
          .get(
            URL_API +
              `findAllCourseByMajor/${localStorage.getItem(
                "majorId"
              )}/${localStorage.getItem("id")}`
          )
          .then((res) => {
            this.setState({ courses: res.data });
          });

        axios
          .get(URL_API + `findAllEnrollByStudent/${localStorage.getItem("id")}`)
          .then((res) => {
            this.setState({ enrolls: res.data });
          });

        swal({
          title: "Sukses",
          text: "Sukses Membatalkan Mata Pelajaran " + course,
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
        swal({
          title: "Failed",
          text: "Gagal Membatalkan Mata Pelajaran " + course,
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
      judulEnroll: {
        marginTop: "30px",
      },
    };
    return (
      <div>
        <NavbarComponent />
        <Container style={style.container}>
          <Row style={style.judul}>
            <Col xs={12} md={10}>
              <h2>List Course {localStorage.getItem("major")}</h2>
            </Col>
          </Row>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Semester</th>
                <th>SKS</th>
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
                  <td>{course.teacher.name}</td>
                  <td>
                    <Button
                      variant="warning"
                      style={style.button_update}
                      onClick={() =>
                        this.ambil(
                          localStorage.getItem("id"),
                          course.id,
                          course.name
                        )
                      }
                    >
                      Ambil
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Col xs={12} md={10} style={style.judulEnroll}>
            <h2>
              List Enroll {localStorage.getItem("nim")} -{" "}
              {localStorage.getItem("name")}
            </h2>
          </Col>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Tanggal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.enrolls.map((enroll, index) => (
                <tr key={enroll.id}>
                  <td>{index + 1}</td>
                  <td>{enroll.course.name}</td>
                  <td>{enroll.enrollDate.slice(0, 10)}</td>
                  <td>
                    {enroll.status === true ? (
                      <Button
                        variant="danger"
                        style={style.button_update}
                        onClick={() =>
                          this.batal(enroll.id, enroll.course.name)
                        }
                      >
                        Batal
                      </Button>
                    ) : (
                      ""
                    )}
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
export default enroll;
