import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Post from './Post'
import { useState } from 'react'
import Practice from './Practice'
import Student from './Student'
import Practice2 from './Practice2'
import Lists from './Lists'
import StyleComponent from './StyleComponent'
import { Bootstrap } from './Bootstrap'
import HooksComp from './HooksComp'
import UseEffectComp from './UseEffectComp'
import ControlledComponent from './ControlledComponent'
import MultipleInputs from './MultipleInputs'
import RefComponent from './RefComponent'
import Products from './Products'
import Shirts from './Shirts'
import Jeans from './Jeans'
import Users from './Users'
import UsersDetails from './UsersDetails'
import Admin from './Admin'

const App = () => {
  const [data, setData] = useState(0);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Shirts />} />
            <Route path='shirts' element={<Shirts />} />
            <Route path='jeans' element={<Jeans />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path='/users' element={<Users />}>
            <Route path=':id' element={<UsersDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path="/post/:category" element={<Post />} />
        </Routes>
      </BrowserRouter>
      <Lists />
      <RefComponent />
      <MultipleInputs />
      <ControlledComponent />
      <Bootstrap />
      <UseEffectComp />
      <HooksComp />
      <StyleComponent />
      <Practice2 />
      <Practice name="Tariq" id={"007"} gun="Desert Hawk" vehicle="Tendra" />
      <h1> {data} </h1>
      <button onClick={() => setData(data + 1)}>Update Data</button>
      <Student details={{ name: "Anil", email: "anil@test.com", age: 28 }} />
    </React.Fragment>
  )
}

export default App
