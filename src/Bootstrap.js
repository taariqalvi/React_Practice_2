import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

export const Bootstrap = () => {
    return (
        <React.Fragment>
            <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>Bootstrap Component</h1>
            <h2 className='bg-success'>This color is with Bootsrap</h2>
        </React.Fragment>
    )
}
