import React from 'react'
import { useParams } from 'react-router-dom'

const UsersDetails = () => {
    const userId = useParams()
    const id = userId.id
    return (
        <React.Fragment>
            <h2>User-{id} Details || User Id: {id} </h2>
        </React.Fragment>
    )
}

export default UsersDetails