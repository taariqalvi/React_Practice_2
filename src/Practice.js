import React, { Component } from 'react'

class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Practice Component</h1>
                <h3>My name is {this.state.name} & Code Name: {this.props.id}</h3>
                <h3>I have {this.props.gun} gun and a red Toyota {this.props.vehicle}</h3>
                <button onClick={() => this.setState({ name: "Alvi" })}>Update Name</button>
            </React.Fragment>
        )
    }
}

export default Practice