import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePet extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangePetName = this.onChangePetName.bind(this);
    this.onChangePetAge = this.onChangePetAge.bind(this);
    this.onChangePetBreed = this.onChangePetBreed.bind(this);
    this.onChangePetSpecies = this.onChangePetSpecies.bind(this);
    this.onChangePetColour = this.onChangePetColour.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      age: '',
      breed: '',
      species: '',
      colour: ''
    }
  }

  onChangePetName(e) {
    this.setState({ name: e.target.value })
  }

  onChangePetAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangePetBreed(e) {
    this.setState({ breed: e.target.value })
  }

  onChangePetSpecies(e) {
    this.setState({ species: e.target.value })
  }

  onChangePetColour(e) {
    this.setState({ colour: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const petObject = {
      name: this.state.name,
      age: this.state.age,
      breed: this.state.breed,
      species: this.state.species,
      colour: this.state.colour
    };
    axios.post('http://localhost:4000/pets/create-pet', petObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', age: '', breed: '', species: '', colour: '', })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangePetName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={this.state.age} onChange={this.onChangePetAge} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" value={this.state.breed} onChange={this.onChangePetBreed} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Species</Form.Label>
          <Form.Control type="text" value={this.state.species} onChange={this.onChangePetSpecies} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Colour</Form.Label>
          <Form.Control type="text" value={this.state.colour} onChange={this.onChangePetColour} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Pet
        </Button>
      </Form>
    </div>);
  }
}