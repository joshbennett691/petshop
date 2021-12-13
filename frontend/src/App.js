import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreatePet from './components/create-pet.component'
import EditPet from './components/edit-pet.component'
import PetList from './components/pet-list.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-pet'} className="nav-link">
                  Petshop
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-pet'} className="nav-link">
                    Create Pet
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/pet-list'} className="nav-link">
                    Pet List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreatePet {...props} />}
                  />
                  <Route
                    exact
                    path="/create-pet"
                    component={(props) => <CreatePet {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-pet/:id"
                    component={(props) => <EditPet {...props} />}
                  />
                  <Route
                    exact
                    path="/pet-list"
                    component={(props) => <PetList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App