import React  ,{useState,useEffect}from 'react'

const OneFive = () => {
    const [width,setWidth]= useState(window.screen.width)

    const newWidth =()=>{
        // console.log(window.innerWidth)
        setWidth(window.innerWidth)
        
    }

    React.useEffect(() => {
        window.addEventListener('resize', newWidth)
        return ()=>{
            window.removeEventListener('resize', newWidth)
        }
    })
    return (
        <div>
            <h1>Hello from UseEffect2</h1>
            <p> The actual size of the window is </p>
            <h3>{width}</h3>
        </div>
    )
}

export default OneFive
