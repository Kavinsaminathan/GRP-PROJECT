import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Http() {
    //create States
    const [list, setList] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [marks, setMarks] = useState(0)
    const [image,setImage]=useState('')

    // update Staets
    const [ispopup, setIspopup] = useState(false)
    const [id1, setId1] = useState('')
    const [name1, setName1] = useState('')
    const [marks1, setMarks1] = useState(0)
    const [image1,setImage1]=useState('')

// update operation
const openPopup=(data)=>{
    setIspopup(true)
    setId1(data.id)
    setName1(data.name)
    setMarks1(data.marks)
    setImage1(data.iamge)

}
const handleupdate=()=>{
    axios.put(`http://localhost:3001/students/${id1}`,{id:id1, name:name1,marks:marks1,image:image1})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
}

// create operation
    useEffect(() => {
        axios.get('http://localhost:3001/students')
            .then(res => { setList(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    const handleSubmit = () => {
        axios.post('http://localhost:3001/students', { id: id, name: name, marks: marks,image:image })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:3001/students/${deleteId}`)
            .then(res => {
                console.log(res)
                alert('Deleted Successfully')
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <h1>Staff Page</h1>
            <div className="form-1">
                <form onSubmit={handleSubmit}>
                    <label>ID    :</label>
                    <input type='text' value={id} onChange={(e) => { setId(e.target.value) }} /><br></br><br></br>
                    <label>NAME  :</label>
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br></br><br></br>
                    <label>MARKS :</label>
                    <input type='text' value={marks} onChange={(e) => { setMarks(e.target.value) }} /><br></br><br></br>
                    <label>IMAGE LINK:</label>
                    <input type='text' value={image} onChange={(e) => { setImage(e.target.value) }} /><br></br><br></br>
                    <button type='submit'>ADD DATA</button>
                </form>
            </div>

            <table className="tabledata">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>MARKS</th>
                        <th>IMAGE LINK</th>
                        <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                            {list.map(x=>(
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.marks}</td>
                                <td><img src={x.image} height={70} width={70}/></td>
                              <td>
                                <button onClick={()=>openPopup(x)}>Update</button>
                                <button onClick={()=>handleDelete(x.id)}>Delete</button>
                                </td>
                            </tr>))
                        }

                        </tbody>

                    </table>
                    
                    
                  


{ ispopup && <div className="update-popup"> <form onSubmit={handleupdate}>
<label>ID    :</label>
<input type='text' value={id1} onChange={(e) => { setId1(e.target.value) }} /><br></br>
<label>NAME  :</label>
<input type='text' value={name1} onChange={(e) => { setName1(e.target.value) }} /><br></br>
<label>MARKS :</label>
<input type='text' value={marks1} onChange={(e) => { setMarks1(e.target.value) }} /><br></br>
<label>IMAGE LINK:</label>
<input type='text' value={image1} onChange={(e) => { setImage1(e.target.value) }} /><br></br>
<button type='submit'>update</button>
</form>
               </div>     }









               </div>
        )        
}
export default Http
