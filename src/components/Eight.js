///Form used


import React, {useState} from 'react'




const Eight = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [Allentry, setAllentry] = useState([])
    let data=false

    const submitForm =(e)=>{
        e.preventDefault();
       if(password && email){
        const newentry = {id: new Date().getTime().toString(),email,password}

        setAllentry(...Allentry, [newentry])
        let data=true
        console.log(Allentry)
        setemail("");
        setpassword("");
       }

       else{
           alert("Entry the data")
       }
    }

    return (
        <>
        <form action ="/" onSubmit={submitForm}>
        
        <p>Enter your Email:</p>
        <input
          type="email" name="email" id="email" value={email} onChange={(e)=> setemail(e.target.value)}
        />
         <p>Enter your Password:</p>
    <input
          type="password" name="password" id="password" value={password} onChange={(e)=> setpassword(e.target.value)}
        />  

        <button type="submit">Submit</button>
      </form>
      <hr/>
      <h3>{data&&"Display All The User Form Data"}</h3>
     {Allentry.map((e)=>{
        
         return <h3 key={e.id}>My Email is {e.email} and the password is {e.password}</h3>
     })} 
     </>
    )
}

export default Eight
