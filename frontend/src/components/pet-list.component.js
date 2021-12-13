import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PetTableRow from './PetTableRow.js';


export default class PetList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/pets/')
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.pets.map((res, i) => {
      return <PetTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Breed</th>
            <th>Species</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}