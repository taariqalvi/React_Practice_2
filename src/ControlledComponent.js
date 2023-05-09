import React from 'react'
class ControlledComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: ""
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Controlled Component</h1>
                <h3>Name: {this.state.name} Email: {this.state.email}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter Name :</label>
                    <input type="text" name='name' value={this.state.name} onChange={this.changeHandler} />
                    <label htmlFor="email">Enter Email :</label>
                    <input type="email" name='email' value={this.state.email} onChange={this.changeHandler} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default ControlledComponent