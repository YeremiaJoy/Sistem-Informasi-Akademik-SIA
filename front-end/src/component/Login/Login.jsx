// import React from "react"
// import { Modal, Button, Form } from "react-bootstrap"

// const Login = (props) => {
//    return (
//       <Modal
//          {...props}
//          size="md"
//          aria-labelledby="contained-modal-title-vcenter"
//          centered
//       >
//          <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//                {/* {props.major.id ? "Register" : "Login"} */} Login
//             </Modal.Title>
//          </Modal.Header>

//          <Form onSubmit={props.handleSubmit}>
//             <Modal.Body>
//                <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Username</Form.Label>
//                   <Form.Control type="text" placeholder="Enter email" />
//                   <Form.Text className="text-muted">
//                      notes
//                   </Form.Text>
//                </Form.Group>

//                <Form.Group controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" placeholder="Password" />
//                </Form.Group>

//                {/* <Form.Group controlId="InputMajorName">
//                   <Form.Label>Major Name</Form.Label>
//                   <Form.Control type="text" name="major_name" value={props.major.major_name} placeholder="Input Major Name" autoComplete="off" required onChange={props.handlechange} />
//                </Form.Group> */}
//             </Modal.Body>

//             <Modal.Footer>
//                <Button variant="primary" type="submit">
//                   {/* {props.major.id ? "Register" : "Login"} */} Login
//                </Button>
//                <Button variant="danger" onClick={props.onHide}>Close</Button>
//             </Modal.Footer>

//          </Form>
//       </Modal>
//    )
// }

// export default Login;