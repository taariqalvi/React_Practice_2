import React, { Component } from 'react'
import './StyleComponent.css'

export default class StyleComponent extends Component {

    render() {
        const styleObject = {
            color: "lime",
            backgroundColor: "purple",
            fontFamily: "cursive",
            padding: 5,
            margin: 5
        }
        
        return (
            <React.Fragment>
                {/* In-line style */}
                <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Style Component</h1>
                <h3 style={styleObject}>Styling with JavaScript Object</h3>
                <h4 className='primary'>Styling with External Stylesheet</h4>
            </React.Fragment>
        )
    }
}
