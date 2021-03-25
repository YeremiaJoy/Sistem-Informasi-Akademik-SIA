import React, { useRef } from 'react';
import { Card, Form, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import AuthApi from "../../utils/AuthApi"

function Copyright() {
  return (
    <div>
      {'Copyright © '}
        Sistem Informasi Akademik
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

export default function SignIn() {
  const style = {
    paper: {
      marginTop: "13vh",
    },
    avatar: {
      marginTop: '10px',
      backgroundColor: 'blue',
    },
    SignInText: {

    }
  }
  const emailRef = useRef()
  const passwordRef = useRef()
  const authApi = React.useContext(AuthApi);
  const handleSignIn = () => {
    authApi.setAuth(true);
  }
  return (
    <>
      <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Card style={style.paper}>

            <Card.Header >
              <Container >
                <Row className="align-item-center justify-content-center">
                  <Avatar style={style.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Row>
                <Row className="align-item-center justify-content-center">
                  <h2 className="text-center">Sign In</h2>
                </Row>
              </Container>
            </Card.Header>

            <Card.Body>
              <Form>
                <Form.Group id="email">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group id="password">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSignIn}
                >
                  Sign In
            </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 d-flex justify-content-end mt-2">      
              <Link href="#"  >
                Forgot password?
              </Link>
          </div>

          <div className="w-100 d-flex justify-content-end mb-2">
          Don't have an account?        
          <Link to="/signup">Sign Up</Link>
          </div>

          <div className="d-flex justify-content-center mb-2">
            <Copyright />            
          </div>
        </div>
      </Container>
    </>
  )
}