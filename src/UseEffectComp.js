import React, { useState, useEffect } from 'react'

const UseEffectComp = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // console.log("Hello I'm useEffect Hook")
    }, [count])

    return (
        <React.Fragment>
            <h1 style={{ backgroundColor: "skyblue", padding: 10 }}>UseEffect Component</h1>
            <h2>Count: {count}</h2>
            <button type='button' onClick={() => setCount(count + 1)}>Increase Count</button>
        </React.Fragment>
    )
}

export default UseEffectComp