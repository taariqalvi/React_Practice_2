import React from 'react'
import { useState } from 'react'

const Student = (props) => {
  const [data, setData] = useState(null);
  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Student Component</h1>
      <input type="text" onChange={(val) => setData(val.target.value)} />
      <h3>Your input goes here : {data}</h3>
      <h3>Student Name: {props.details.name}</h3>
      <h3>Student Email: {props.details.email}</h3>
      <h3>Student Age: {props.details.age}</h3>
    </React.Fragment>
  )
}

export default Student;