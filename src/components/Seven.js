import React, {useState} from 'react'

const Seven = () => {

    const [demo, setdemo] = useState("elhance")
    return (
        <div>
            <h1>Hello this {demo || "Akash"}</h1>
            <h3> Hyi this {demo && "pk"}</h3>
        </div>
    )
}

export default Seven
