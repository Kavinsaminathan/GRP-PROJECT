import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admission() {
    const [list,setList]=useState([])
    const [name,setName]=useState('')
    const [age,setAge]=useState()
    const [duration,setDuration]=useState('')
    const [mode,setMode]=useState('')
    const [fees,setSyllabus]=useState()
    const [languages,setLanguage]=useState('')
    const navigate=useNavigate()

    const handleClk=()=>{
        navigate('/register')
    }

    useEffect(()=>{
        axios.get('http://localhost:3002/users')
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err)})
    },[])

  return (
    <div>
        <table className='Adm-table'>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Age Limit</th>
                    <th>Course Duration</th>
                    <th>Mode</th>
                    <th>Fees</th>
                    <th>Extra Language</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>
                    <tr>
                        <td>{x.name}</td>
                        <td>{x.age}</td>
                        <td>{x.duration}</td>
                        <td>{x.mode}</td>
                        <td>{x.fees}</td>
                        <td>{x.languages}</td>
                        <td>{<button onClick={handleClk}>Register Now</button>}</td>
                    </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Admission