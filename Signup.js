import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')
     const navigate=useNavigate()
     const handleSubmit=(e)=>{
        axios.post('http://localhost:3002/Admin',{name,email,password})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        navigate('/login')
     }
      return (
    <div>
      <form onSubmit={handleSubmit}>
       <label>Name :</label>
       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
       <label>Email :</label>
       <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
       <label>Password :</label>
       <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
       <button type='submit'>Signup</button>

      </form>
    </div>
  )
}
