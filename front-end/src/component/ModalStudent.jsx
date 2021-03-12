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
            <Form onSubmit={props.HandleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formBasicNama">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="name" placeholder="Masukkan Nama Lengkap" autoComplete="off" required onChange={props.HandleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicNim">
                        <Form.Label>NIM</Form.Label>
                        <Form.Control type="name" placeholder="NIM" autoComplete="off" required onChange={props.HandleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMajor">
                        <Form.Label>Major</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            {props.Major.map(major => <option>{major.major_name}</option> )} 
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