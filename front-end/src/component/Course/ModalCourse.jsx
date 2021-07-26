import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const ModalCourse = (props) => {
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
          {props.course.id ? "Update Course" : "Add Course"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={props.handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formBasicNama">
            <Form.Label>Nama Mata Pelajaran</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={props.course.name}
              placeholder="Masukkan Nama Mata Pelajaran"
              onChange={props.handlechange}
              autoComplete="off"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicSemester">
            <Form.Label>Semester</Form.Label>
            <Form.Control
              name="semester"
              as="select"
              onChange={props.handlechange}
              value={props.course.semester}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicSks">
            <Form.Label>Sks</Form.Label>
            <Form.Control
              name="sks"
              as="select"
              onChange={props.handlechange}
              value={props.course.sks}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridMajor">
            <Form.Label>Major</Form.Label>
            <Form.Control
              name="major"
              as="select"
              onChange={props.handlechange}
              value={props.course.major}
            >
              {props.major.map((major) => (
                <option key={major.id} value={major.id}>
                  {major.code} | {major.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTeacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control
              name="teacher"
              as="select"
              onChange={props.handlechange}
              value={props.course.teacher}
            >
              {props.teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              {props.course.id ? "Update" : "Add"}
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
export default ModalCourse;
