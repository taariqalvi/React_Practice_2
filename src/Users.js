import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
    return (
        <React.Fragment>
            <h1>Users Component</h1>
            <h4><Link to="/users/1">User 1</Link></h4>
            <h4><Link to="/users/2">User 2</Link></h4>
            <h4><Link to="/users/3">User 3</Link></h4>
            <Outlet />
        </React.Fragment>
    )
}

export default Users