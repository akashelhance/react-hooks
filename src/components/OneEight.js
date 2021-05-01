import React, {useRef,useState} from 'react'

const OneEight = () => {
    const luckyName =useRef(null)
    const mobile = useRef(null)
    const [show,setShow]=useState(false)
    const submitForm =(e)=>{
        e.preventDefault()
        let name=luckyName.current.value
        let m= mobile.current.value
        if(!name){
            alert("Please enter the name")
        }
        else{
            setShow(true)
        }
        
    }
    return (
        <div>
      <form onSubmit={submitForm}>
          <label>Enter Your Lucky name</label><br/>
  <input type="text" id="luckyname" ref={luckyName} name="luckyname" />
  <input type="number" id ="mobile" ref={mobile} name="mobile"/>
  <button className="btn btn-primary" type="submit">Submit</button>
 
</form>
<p>{show && `Your name is ${luckyName.current.value} and mobile is ${mobile.current.value}`}</p>
        </div>
    )
}

export default OneEight
