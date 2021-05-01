import React, {useState} from 'react'

const Four = () => {
    const bioData =[
        {id: 0, name: "Akash Elhance", age: 24},
        {id: 1, name: "Shreya", age: 23}, 
        {id: 2,name: "abc",age:21}
    ]
    
   
    const [myArray, setArrayData]=useState(bioData)
   

   const clearData=()=>{
       setArrayData([])
   }
    return (
        <div>
         {myArray.map((e)=>{
             return <h1 key={e.id}>hello this {e.name} and his age is {e.age}</h1>
         })}

         <button className="hello" onClick={clearData}>Clear</button>
        </div>
    )
}

export default Four
