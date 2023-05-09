import React from 'react'

class RefComponent extends React.Component {

    constructor(props) {
        super(props)

        this.myRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.myRef.current.innerHTML)
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Ref Component</h1>
                <h3 ref={this.myRef}>This is Ref Component. Here we'll learn about Refs in Class Components</h3>
            </React.Fragment>
        )
    }
}

export default RefComponent