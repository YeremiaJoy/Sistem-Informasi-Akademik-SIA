import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "react-bootstrap/ModalHeader"

function ModalMajor(props) {
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
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Code Major</Form.Label>
            <Form.Control type="name" placeholder="Input Code Major" autoComplete="off" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Major Name</Form.Label>
            <Form.Control type="text" placeholder="Input Major Name" autoComplete="off" required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">Submit</Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMajor;

