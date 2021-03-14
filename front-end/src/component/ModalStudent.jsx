import React from 'react'
import { Modal, Button, Form, Col } from "react-bootstrap"

const ModalStudent = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Student
            </Modal.Title>
            </Modal.Header>
            <Form onSubmit={(event) => props.HandleSubmit(event)}>
                <Modal.Body>
                    <Form.Group controlId="formBasicNama">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Masukkan Nama Lengkap" onChange={(event) => props.HandleChange(event)} autoComplete="off"  required />
                    </Form.Group>
                    <Form.Group controlId="formBasicNim">
                        <Form.Label>NIM</Form.Label>
                        <Form.Control type="name" name="nim" placeholder="NIM" onChange={(event) => props.HandleChange(event)} autoComplete="off" required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMajor">
                        <Form.Label>Major</Form.Label>
                        <Form.Control name = "major" as="select" defaultValue="Informatika" onChange={(event) => props.HandleChange(event)}>
                            {props.Major.map(major => <option key={major.id}>{major.major_name}</option> )} 
                        </Form.Control>
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
export default ModalStudent;