import axios from 'axios'
import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'
import ModalMajor from '../component/Major/ModalMajor'
import { URL_API } from '../utils/constant'
import swal from 'sweetalert'
import DeleteIcon from '@material-ui/icons/Delete';

class major extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMajorShow: false,
      isUpdate: false,
      majors: [], //database json fake api
      addMajor: { //add data baru
        id: ' ',
        code: ' ',
        major_name: ' '
      }
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
    this.postDatatoAPI = this.postDatatoAPI.bind(this);
    this.putDataToAPI = this.putDataToAPI.bind(this);
  }

  getShowAPI = () => {
    axios.get(URL_API + "major").then((res) => {
      this.setState({ majors: res.data })
    })
  }

  handlechange = (event) => {
    let addMajorNew = {...this.state.addMajor};
    addMajorNew[event.target.name] = event.target.value;
    this.setState({
      addMajor: addMajorNew
    })
  }

  componentDidMount() {
    this.getShowAPI();
  }

  handlesubmit = () => {
    if (this.state.isUpdate){
      this.putDataToAPI();
    }else{
      this.postDatatoAPI();
    }
  }

  postDatatoAPI = () => {
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
      console.log("dataUser", this.state.addMajor);
      swal({
        title: "Gagal Add Major",
        text: "Gagal Add Major",
        icon: "danger",
        button: false,
        timer: 1500,
      });
    });
    this.setState({
      addMajorShow: false,
      addMajor: {
        id: ' ',
        code: ' ',
        major_name: ' '
      }
    })
  }

  deleteData = (data) => {
    this.findMajorById(data)
    axios.delete(URL_API + `major/${data}`).then((res) => {
      this.getShowAPI();
      swal({
        title: "Sukses Delete Major",
        text: "Sukses Delete Major " + this.state.addMajor.major_name,
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

  findMajorById = (majorId) => {
    axios.get(URL_API + `major/${majorId}`).then((res) => {
      if (res.data != null) {
        this.setState({ addMajor: res.data })
      }
    }).catch((error) => {
      console.error("Error - " + error);
    });

  };

  handleupdate = (data) => {
    console.log(data);
    this.setState({
      addMajor: data,
      isUpdate: true
    })
  }

  putDataToAPI = (e) => {
    axios.put(URL_API + `major/${this.state.addMajor.id}`, this.state.addMajor).then((res) => {
      this.getShowAPI();
      swal({
        title: "Sukses Update Major",
        text: "Sukses Update Major " + this.state.addMajor.major_name,
        icon: "success",
        button: false,
        timer: 1500,
      });
    }).catch((error) => {
      console.log("Error yaa ", error);
      console.log("dataUser", this.state.addMajor);
      swal({
        title: "Gagal Update Major",
        text: "Gagal Update Major",
        icon: "danger",
        button: false,
        timer: 1500,
      });
    });
    this.setState({
      addMajorShow: false,
      isUpdate: false,
      addMajor: {
        id: '',
        code: '',
        major_name: ''
      }
    })
  }

  render() {
    const style = {
      button_update: {
        textAlign: "center",
        marginRight: "10px"
      },
      button_delete: {
        textAlign: "center",
        paddingInline: "20px"
      },
      container: {
        marginTop: "70px"
      },
      judul: {
        marginBottom: "20px"
      }
    }
    let addMajorClose = () => this.setState({ addMajorShow: false });

    return (
      <Container style={style.container}>
        <Row style={style.judul}>
          <Col xs={12} md={10}>
            <h2>List Major</h2>
          </Col>
          <Col >
            <Button variant="success" onClick={() => this.setState({
              addMajorShow: true,addMajor: {
                id: '',
                code: '',
                major_name: ''
              }
            })} >Add Major</Button>
            <ModalMajor
              show={this.state.addMajorShow}
              onHide={addMajorClose}
              major={this.state.addMajor}
              handlechange={this.handlechange}
              handlesubmit={this.handlesubmit}
            />
          </Col>
        </Row>
        <Table striped>
          <thead>
            <tr>
              <th>No</th>
              <th>Code</th>
              <th>Nama Major</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {this.state.majors.map((major, index) =>
              <tr key={major.id} >
                <td>{index + 1}</td>
                <td>{major.code}</td>
                <td>{major.major_name}</td>
                <td>
                  <Button variant="warning" style={style.button_update} onClick={() => {
                    this.setState({
                      addMajorShow: true,addMajor: {
                        id: '',
                        code: '',
                        major_name: ''
                      }
                    });
                    // this.findMajorById(major.id)
                    this.handleupdate(major);
                  }}>Update </Button>
                  <Button variant="danger" style={style.button_delete} onClick={() => this.deleteData(major.id)} ><DeleteIcon /></Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    )
  }
}
export default major;