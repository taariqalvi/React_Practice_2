import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <React.Fragment>
            <h1>This is our Products Page</h1>
            <nav>
                <Link to="shirts">Shirts</Link>
                <Link to="jeans">Jeans</Link>
            </nav>
            <Outlet />
        </React.Fragment>
    )
}

export default Products