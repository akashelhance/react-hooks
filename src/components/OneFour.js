import React, {useState,useEffect} from 'react'

const OneFour = () => {

    const [demo, setDemo]=useState(0)
    useEffect(() =>{
      
        if(demo >= 1){
            document.title =`chats (${demo})`
        }
        else{
            document.title =`chats`
          
        }
        console.log("I am from the demo list")
    }, [demo])
  

    useEffect(()=>{
        console.log("I am from the second useEffect hooks")
    },[])

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

export default OneFour
