import React from 'react'
import { useState } from 'react'

const HooksComp = () => {
    const personObject = {
        name: "Tariq",
        age: 35,
        height: 5.11,
        isYoung: true
    }
    const [person, setPerson] = useState(personObject)
    const changeState = () => {
        setPerson({
            name: "Alvi",
            age: 45,
            height: 6,
            isYoung: false
        })
    }
    return (
        <React.Fragment>
            <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Hooks Component</h1>
            <h2>Name: {person.name}</h2>
            <h2>Age: {person.age}</h2>
            <h2>Height: {person.height}</h2>
            <h2>isYoung: {person.isYoung.toString()}</h2>
            <button type='button' onClick={changeState}>Change Data</button>
        </React.Fragment>
    )
}

export default HooksComp