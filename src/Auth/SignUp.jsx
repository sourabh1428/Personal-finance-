import React from 'react'
import "./SignUp.css"
import { useState } from 'react';


const SignUp = () => {

  const [state, setstate] = useState({Email:'',Password:''});

    function handleChange(e){
      setstate({...state,[e.target.name]:e.target.value});
    }


  return (
    <div>
      <div  className='container'>
      <input type="text" placeholder='email' name='Email' onChange={handleChange} value={state.Email}/>
      <input type="text" placeholder='password' name='Password' onChange={handleChange} value={state.Password}/>
      <button onClick={()=>{console.log(state)}}>SignUp</button>

      <div>
        Sign up with google
      </div>
    </div>
    </div>
  )
}

export default SignUp