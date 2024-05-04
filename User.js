import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function User() {
    const[searchParams,setSearchParams]=useSearchParams()
    const isActive=searchParams.get('filt')==='active'
  return (
    <div>
     userPage
     <Outlet/>
     <button onClick={()=>{setSearchParams({'filt':'active'})}}>Active User</button> <br/><br/> 
     <button onClick={()=>{setSearchParams({})}}>  All User</button>
     {isActive?"Active users only"
     :"All Users"}
    </div>
  )
}
