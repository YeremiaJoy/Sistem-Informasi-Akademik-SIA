import axios from 'axios';
import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'
import ModalMajor from '../component/ModalMajor'
import { URL_API } from '../utils/constant'
import swal from 'sweetalert'

class major extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      majors: [], //database json fake api
      addMajor: { //add data baru
        id: null,
        code: null,
        major_name: null
      }
    }
  }

  getShowAPI = () => {
    axios.get(URL_API + "major").then((res) => {
      this.setState({ majors: res.data })
    })
  }

  handleChange = (event) => {
    let addMajorNew = {...this.state.addMajor};
    addMajorNew[event.target.name] = event.target.value;
    this.setState({
      addMajor: addMajorNew
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(URL_API + "major", this.state.addMajor).then((res) => {
      this.getShowAPI();
      swal({
        title: "Sukses Add Major",
        text: "Sukses Add Major " + this.state.addMajor.major_name,
        icon: "success",
        button: false,
        timer: 1500,
      });
    }).catch((error) => {
      console.log("Error yaa ", error);
      console.log("dataUser", addMajor);
      swal({
        title: "Gagal Add Major",
        text: "Gagal Add Major",
        icon: "danger",
        button: false,
        timer: 1500,
      });
    });
    this.setState({
      addModalShow: false,
    })
  }

  componentDidMount() {
    this.getShowAPI();
  }

render() {
  const style = {
    button_delete: {
      textAlign: "center"
    },
    container: {
      marginTop: "70px"
    },
    judul: {
      marginBottom: "20px"
    }
  }
  let addModalCLose = () => this.setState({ addModalShow: false });

  return (
    <Container style={style.container}>
      <Row style={style.judul}>
        <Col xs={12} md={10}>
          <h2>List Major</h2>
        </Col>
        <Col >
          <Button variant="success" onClick={() => this.setState({ addModalShow: true })} >Add Major</Button>
          <ModalMajor show={this.state.addModalShow} onHide={addModalCLose} code={this.state.code} major_name={this.state.major_name} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </Col>
      </Row>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Code</th>
            <th>Nama Major</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.majors.map(major =>
              <tr key={major.id}>
                <td>{major.id}</td>
                <td>{major.code}</td>
                <td>{major.major_name}</td>
                <td><Button variant="danger" style={style.button_danger}>Update</Button></td>
              </tr>
            )}
        </tbody>
      </Table>
    </Container>
  )
}
}

export default major;