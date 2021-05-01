import React,{useState} from 'react'


const TwoZero = () => {
    const [count,setcount]= useState(0)

    const add =() =>{
        setcount(count+1)
    }
    const sub =()=>{
        setcount(count-1)
    }
    return (
        <div>
           <p>{count}</p>
           <button onClick={add}> +1</button>
           <button onClick={sub}> -1</button>
        </div>
    )
}

export default TwoZero
