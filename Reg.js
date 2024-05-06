import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Reg() { 
    const[list,setList]=useState([])
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [dob,setDob]=useState('')
  const [fatherName,setFatherName]=useState('')
  const [motherName,setMotherName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [gender,setGender]=useState('')
  const [address,setAddress]=useState('')
  const [course,setCourse]=useState('')
  const [activity,setActivity]=useState('')
  const [language,setLanguage]=useState('')
  const navigate =useNavigate()
  const handleSubmit=(e)=>{
    axios.post('http://localhost:3002/Register',{fname,lname,dob,fatherName,motherName,email,number,gender,address,course,activity,language})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    navigate('/Products')
  }
  useEffect(()=>{
    axios.get('http://localhost:3002/Register')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
},[])
const changeGender=(e)=>{setGender(e.target.value)}
    const changeCourse=(e)=>{setCourse(e.target.value)}
    const changeActivity=(e)=>{setActivity(e.target.value)}
    const changeLanguage=(e)=>{setLanguage(e.target.value)}




return (
<div>
<fieldset style={{width: '100%'}}>
     <form style={{width: '100%'}} onSubmit={handleSubmit}>
        <table className='Adm-table'>
            <tr>
                <td>FIRST NAME</td>
                <td><input maxlength="10" value={fname} type="text" onChange={(e)=>setFname(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>LAST NAME</td>
                <td><input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>DATE OF BIRTH</td>
                <td><input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/></td>
            </tr>
            <tr>
                <td>FATHER NAME</td>
                <td><input type="text" value={fatherName} onChange={(e)=>setFatherName(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>MOTHER NAME</td>
                <td><input type="text" value={motherName} onChange={(e)=>setMotherName(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>EMAIL ID</td>
                <td><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <td>MOBILE NUMBER</td>
                <td><input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>(10 digit number)</td>
            </tr>
            <tr>
            <td><label>GENDER:</label></td>
                <select onChange={changeGender}>
                    <option value='MALE'>MALE</option>
                    <option value='FEMALE'>FEMALE</option>
                   
                </select>
              
            </tr>
            <tr>
                <td>ADDRESS</td>
                <td><textarea name="" id="" cols="30" rows="3" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea></td>
            </tr>
            <tr>
                <td>
                <label> COURSE FOR:</label></td>
                <select onChange={changeCourse} >
                    <option value='PRE-KG'>Pre-KG</option>
                    <option value='LKG'>LKG</option>
                    <option value='UKG'>UKG</option>
                </select>
              
            </tr>
            <tr>
            <td><label>EXTRA ACTIVITIES:</label></td>
                <select onChange={changeActivity}>
                    <option value='DRAWING'>DRAWING</option>
                    <option value='SINGING'>SINGING</option>
                    <option value='DANCING'>DANCING</option>
                    <option value='SKETCHING'>SKETCHING</option>
                    <option value='KARATHE'>KARATHE</option>
                    <option value='OTHERS'>OTHERS</option>
                </select>
            </tr>
            <tr>
            <td><label>LANGUAGES:</label></td>
                <select onChange={changeLanguage}>
                    <option value='ENGLISH'>ENGLISH</option>
                    <option value='HINDI'>HINDI</option>
                    <option value='MALAYALAM'>MALAYALAM</option>
                    <option value='TAMIL'>TAMIL</option>
                    
                </select>
             
            </tr>
            <tr>
                <td colSpan="2">
                    <center><input type="submit" style={{marginLeft:'40px'}}/><input type="reset" style={{marginLeft:'40px'}}/></center>
                </td>
            </tr>
        </table>
    </form>

    </fieldset><br/>



<table className='form1'>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>DOB</th>
                    <th>FatherName</th>
                    <th>MotherName</th>
                    <th>EMAIL ID</th>
                    <th>Mobile No</th>
                    <th>Gender</th>
                    <th>ADDRESS</th>
                    <th>Course</th>
                    <th>EXTRA activity</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>
                    <tr>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.dob}</td>
                        <td>{x.fatherName}</td>
                        <td>{x.motherName}</td>
                        <th>{x.email}</th>
                        <td>{x.number}</td>
                        <td>{x.gender}</td>
                        <td>{x.address}</td>
                        <td>{x.course}</td>
                        <td>{x.activity}</td>
                        <td>{x.language}</td>
                        {/* <td>{<button onClick={handleClk}>Register Now</button>}</td> */}
                    </tr>)}
            </tbody>
        </table>
</div>







)





}
export default Reg
