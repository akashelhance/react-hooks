import React, {useState} from 'react'

const Five = () => {
  const obj = {
      id: 1,
      name: "Akash Elhance",
      age: "24"
  }

    const [newobj, setobj] = useState(obj)

    // const updateName =()=>{
    //     setNewArray([{id: 11, name: "akash", age: 24}])
    // }

    const updateName =()=>{
            setobj({...newobj, name:"Pk Sinha"})
        
    }

    return (
        <div>
           
           <h1> This is {newobj.name} and his age is {newobj.age}</h1>
     

            <button onClick={updateName}> Update The Name</button>
        </div>
    )
}

export default Five
