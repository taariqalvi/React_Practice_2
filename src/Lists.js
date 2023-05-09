import React from 'react'

const Lists = () => {
    const students = ["Adil", "Kumar", "Prem", "Zain"];
    const numbers = [2, 4, 6, 8];
    return (
        <React.Fragment>
            <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Lists Component</h1>
            <h2>List of Students</h2>
            {students.map(std => `${std} | `)}
            <br/>
            {numbers.map(num => `${num * 2} * `)}
        </React.Fragment>
    )
}

export default Lists