import React, { useState } from 'react'

const MultipleInputs = () => {

  const [data, setData] = useState({
    name: "",
    email: ""
  })

  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    console.log(name, value)
    setData((prev) => {
      return {
        ...prev, [name]: value
      }
    })
  }

  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Multiple Inputs Component</h1>
      <form>
        <label htmlFor="name">Enter Name :</label>
        <input type="text" name='name' value={data.name} onChange={changeHandler} />
        <label htmlFor="email">Enter Email :</label>
        <input type="email" name='email' value={data.email} onChange={changeHandler} />
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  )
}

export default MultipleInputs