import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Navbar() {
  const auth=useAuth()
  return (
    <div>
        <nav className='header-nav'>
        <img src={'https://www.pngmart.com/files/22/Kindergarden-PNG-Transparent.png'} style={{width:'200px', marginRight:'500px'}}/>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Service">Admission</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/User">Users</NavLink>
        {/* <NavLink to="/Profile">Profile</NavLink> */}
        {!auth.user && <NavLink to="/Login">Login</NavLink> }
        {/* {!auth.user && <NavLink to="/Signup">SignUp</NavLink>} */}
        <input type='search'placeholder='search'/>       <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
    </nav>
    </div>
  )
}
