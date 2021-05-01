import React, {useState,useEffect} from 'react'


const Ten = () => {
    useEffect(() =>{
        if(demo >= 1){
            document.title =`chats (${demo})`
        }
        else{
            document.title =`chats`
        }
       
    })
    const [demo, setDemo]=useState(0)

   const changeing=()=>{
    setDemo(demo+1)
    }

    console.log("Outside the functiion Calling")
    return (
        <div>
            {demo}
            <button onClick={changeing}> Add</button>
        </div>
    )
}

export default Ten
