import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class PetTableRow extends Component {

    constructor(props) {
        super(props);
        this.deletePet = this.deletePet.bind(this);
    }

    deletePet() {
        axios.delete('http://localhost:4000/pets/delete-pet/' + this.props.obj._id)
            .then((res) => {
                console.log('Pet successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.breed}</td>
                <td>{this.props.obj.species}</td>
                <td>{this.props.obj.colour}</td>
                <td>
                    <Link className="edit-link" to={"/edit-pet/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deletePet} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}