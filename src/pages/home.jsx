import React, { Component } from 'react'
import { Card, Button, Tabs, Tab, Container } from 'react-bootstrap';

class home extends Component {
  render() {
    const style = {
      tab: {
        marginTop: "2%"
      }
    }
    return (
      <Container fluid>
        <Tabs defaultActiveKey="Major" id="uncontrolled-tab-example" style={style.tab}>
          <Tab eventKey="Major" title="Major">
            <Card.Body href="#major">
              <Card.Title >Major </Card.Title>
              <Card.Text>
                Press the button to show any Major.  
              </Card.Text>
              <Button href="/major" variant="primary">Show Major ..</Button>
            </Card.Body>
          </Tab>

          <Tab eventKey="Student" title="Student">
            <Card.Body>
              <Card.Title >Student </Card.Title>
              <Card.Text>
                Press the button to show any Students.
              </Card.Text>
              <Button href="/student" variant="primary">Show Students ..</Button>
            </Card.Body>
          </Tab>
          
        </Tabs>
      </Container>
    )
  }
}
export default home;