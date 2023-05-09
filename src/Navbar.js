import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/post/Laptop">Post</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default Navbar

// style={({ isActive }) => { return { backgroundColor: isActive ? "red" : "" } }}