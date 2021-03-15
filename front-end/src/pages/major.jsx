import axios from 'axios'
import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'
import ModalMajor from '../component/Major/AddMajor'
import { URL_API } from '../utils/constant'
import swal from 'sweetalert'
import DeleteIcon from '@material-ui/icons/Delete';

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

  handlesubmit = (e) => {
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
      addModalShow: false,
    })
  }

  deleteData = (data) => {
    axios.delete(URL_API + `major/${data}`).then((res)=>{
      this.getShowAPI();
      swal({
        title: "Sukses Delete Major",
        text: "Sukses Delete Major " + data.major_name,
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
  let addModalCLose = () => this.setState({ addModalShow: false });

  return (
    <Container style={style.container}>
      <Row style={style.judul}>
        <Col xs={12} md={10}>
          <h2>List Major</h2>
        </Col>
        <Col >
          <Button variant="success" onClick={() => this.setState({ addModalShow: true })} >Add Major</Button>
          <ModalMajor 
          show={this.state.addModalShow} 
          onHide={addModalCLose} 
          handlechange={this.handlechange} handlesubmit={this.handlesubmit} />
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
          
          {this.state.majors.map((major,index) =>
              <tr key={major.id} >
                <td>{index+1}</td>
                <td>{major.code}</td>
                <td>{major.major_name}</td>
                <td><Button variant="warning" style={style.button_update}>Update</Button>
                <Button variant="danger" style={style.button_delete} onClick={()=>this.deleteData(major.id)} ><DeleteIcon/></Button></td>           
              </tr>
            )}
        </tbody>
      </Table>
    </Container>
  )
}
}

export default major;