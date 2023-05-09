import React, { Component } from 'react'

export default class Practice2 extends Component {

    constructor() {
        super();
        this.state = {
            name: "Hayabusa"
        }
        this.BikeChange = this.BikeChange.bind(this);
    }

    BikeChange() {
        this.setState({
            name: "Yamaha R6"
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Practice2 Component</h1>
                <h3>My bike is {this.state.name}</h3>
                <button type='button' onClick={this.BikeChange}>Change Bike</button>
            </React.Fragment>
        )
    }
}
