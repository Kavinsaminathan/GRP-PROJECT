import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const[userlist,setUserlist]=useState([])
    const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')
     const[errormessage,setErrormessage]=useState('')
     const auth=useAuth()
     const navigate=useNavigate()
     useEffect(()=>{
        axios.get('http://localhost:3002/Admin')
        .then(res=>setUserlist(res.data))
        
     },[])
     const handleLogin=(e)=>{
        e.preventDefault()
        const user=userlist.find(x=>x.email===email)
        if(user){
            if(user.password===password){
                auth.login(user.name)
                navigate('/')
            }
            else{
                setErrormessage("Incorrect Password")
            }
        }
        else{
            setErrormessage("user Not Found")
        }
     }
  return (
    <div>
      <form onSubmit={handleLogin}>
       <label>Email :</label>
       <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
       <label>Password :</label>
       <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
       <button type='submit'>Login</button>
       </form>
       {errormessage}
    </div>
  )
}
