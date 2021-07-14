import React, { useState } from 'react'
import { Modal, Button, Form, Col } from "react-bootstrap"
import major from '../../pages/major';

const ModalStudent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ fontFamily: 'sans-serif' }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.student.id ? "Update Student" : "Add Student"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={props.handleSubmit}>
        <Modal.Body>

          <Form.Group controlId="formBasicNama">
            <Form.Label>
              Nama Lengkap
            </Form.Label>
            <Form.Control type="name" name="name" value={props.student.name} placeholder="Masukkan Nama Lengkap" onChange={props.handlechange} autoComplete="off" required />
          </Form.Group>

          <Form.Group controlId="formBasicNim">
            <Form.Label>NIM</Form.Label>
            <Form.Control type="name" name="nim" value={props.student.nim} placeholder="NIM" onChange={props.handlechange} autoComplete="off" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMajor">
            <Form.Label>Major</Form.Label>
            <Form.Control name="major" as="select" onChange={props.handlechange}>
              <option value="0"> {props.student.major.id ? props.student.major.code + " | " + props.student.major.name : "-- Select Major --"} </option>
              {props.major.map(major =>
                <option key={major.id} value={major.id}>
                  {major.code} | {major.name}
                </option>)}

            </Form.Control>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit">{props.student.id ? "Update" : "Add"}</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default ModalStudent;