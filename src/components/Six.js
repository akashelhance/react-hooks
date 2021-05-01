import React, {useState} from 'react'

const Six = () => {
    const initialArray =[
        {id:1, name: "Akash Elhance", age: 24},
        {id: 2, name: "Shreya", age: 21}
    ]
    const [myArray, setmyArray] = useState(initialArray)
    const RemovedData =(id)=>{
    
        const myNewArray = myArray.filter((currentElement)=>{
            return currentElement.id !==id
            console.log(id)
        })

        setmyArray(myNewArray)
    }
   

  
    return (
        <div>
           <h3>{myArray.map((e)=>{
               return  <h1 key={e.id}>My name is {e.name} and age is {e.ages} <button onClick={()=>RemovedData(e.id)} > Remove</button></h1>
           })}</h3>
        </div>
    )
}

export default Six
