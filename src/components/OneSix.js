import React, { useEffect, useState } from 'react'

const OneSix = () => {
    const [users, setusers]=useState([])
    const [Loading,setLoading] = useState(true)
    const getusers =async()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data= await response.json()
            
            setusers(data)
        } catch (error) {
            console.log(error)
        }
        
     
    }
    useEffect(() => {
       getusers();
       
    }, [])
    return (
        <>
            <div>
            
                <h1 className="text-center"> List of Github Users</h1>
                <div className="container-fluid mt-5">
                    <div className="row text-center">
                        <div className="col-6 col-md-4 mt-5">
                            {users.map((e)=>{
                              return  <div class="card">
                                <img class="card-img-top" src={e.avatar_url} alt="{e.login}" />
                                <div class="card-body">
                                    <h5 class="card-title">{e.name}</h5>
                                    <p class="card-text"> {e.email}</p>
                                    <a href="{e.website}" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            })}
                            
                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneSix
