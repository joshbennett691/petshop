import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditPet extends Component {

  constructor(props) {
    super(props)

    this.onChangePetName = this.onChangePetName.bind(this);
    this.onChangePetAge = this.onChangePetAge.bind(this);
    this.onChangePetBreed = this.onChangePetBreed.bind(this);
    this.onChangePetSpecies = this.onChangePetSpecies.bind(this);
    this.onChangePetColour = this.onChangePetColour.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        name: '',
        age: '',
        breed: '',
        species: '',
        colour: ''
      }
    }

  componentDidMount() {
    axios.get('http://localhost:4000/pets/edit-pet/' + this.props.match.params.id)
      .then(res => {
        this.setState({ name: '', age: '', breed: '', species: '', colour: '', })
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/pets/update-pet/' + this.props.match.params.id, petObject)
      .then((res) => {
        console.log(res.data)
        console.log('Pet successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/pet-list')
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
          Update Pet
        </Button>
      </Form>
    </div>);
  }
}