import React from "react"
import { Modal, Button, Form } from "react-bootstrap"

const ModalMajor = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.major.id ? "Update Major" : "Add Major"}
        </Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={(e) => {props.major.id ? props.handleupdate(props.major.id) : props.handlesubmit(e)}} >
        <Modal.Body>
          <Form.Group controlId="InputMajorCode">
            <Form.Label>Code Major</Form.Label>
            <Form.Control type="name" name="code" value={props.major.code} placeholder="Input Code Major" autoComplete="off" required onChange={props.handlechange}/>
          </Form.Group>

          <Form.Group controlId="InputMajorName">
            <Form.Label>Major Name</Form.Label>
            <Form.Control type="text" name="major_name" value={props.major.major_name} placeholder="Input Major Name" autoComplete="off" required onChange={props.handlechange}/>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">Submit</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalMajor;

