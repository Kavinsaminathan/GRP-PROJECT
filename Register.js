import React, { useState } from 'react'

function Register() {
    const[name,setName]=usestate('')
    const[age,setAge]=useState('')
    const[address,setAddress]=useState('')
    const[mothername,setMothername]=useState('')
    const[fathername,setFathername]=useState('')
    const[community,setCommunity]=useState('')
    const[phoneno,setPhoneno]=useState('')
  return (
    <div>
        <h1>STUDENT REGISTRATION FORM</h1>
        <form>
            <label>Name:</label>
            <input type='text' value={} onChange={(e)=>{setName(e.target.value)}}/>




        </form>
    </div>
  )
}

export default Register