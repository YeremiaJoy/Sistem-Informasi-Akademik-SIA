import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "react-bootstrap/ModalHeader"

const AddMajor = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Major
        </Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={(e) => props.handlesubmit(e)}>
        <Modal.Body>
          <Form.Group controlId="InputMajorCode">
            <Form.Label>Code Major</Form.Label>
            <Form.Control type="name" name="code" placeholder="Input Code Major" autoComplete="off" required onChange={props.handlechange}/>
          </Form.Group>

          <Form.Group controlId="InputMajorName">
            <Form.Label>Major Name</Form.Label>
            <Form.Control type="text" name="major_name" placeholder="Input Major Name" autoComplete="off" required onChange={props.handlechange}/>
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

export default AddMajor;

