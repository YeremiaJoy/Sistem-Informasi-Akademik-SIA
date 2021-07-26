import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const ModalTeacher = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ fontFamily: "sans-serif" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.teacher.id ? "Update Teacher" : "Add Teacher"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={props.handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formBasicNama">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={props.teacher.name}
              placeholder="Masukkan Nama Lengkap Beserta Gelar"
              onChange={props.handlechange}
              autoComplete="off"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={props.teacher.username}
              placeholder="Masukkan Username"
              onChange={props.handlechange}
              autoComplete="off"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridMajor">
            <Form.Label>Major</Form.Label>
            <Form.Control
              name="major"
              as="select"
              onChange={props.handlechange}
              value={props.teacher.major}
            >
              {props.major.map((major) => (
                <option key={major.id} value={major.id}>
                  {major.code} | {major.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {props.teacher.id ? (
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={props.teacher.password}
                placeholder="Masukkan Password"
                onChange={props.handlechange}
                autoComplete="off"
                required
              />
            </Form.Group>
          ) : (
            ""
          )}
          <Modal.Footer>
            <Button variant="primary" type="submit">
              {props.teacher.id ? "Update" : "Add"}
            </Button>
            <Button variant="danger" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    </Modal>
  );
};
export default ModalTeacher;
