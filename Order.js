import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Order() {
  return (
    <div>
      order is confirmed
      <button onClick={()=>{Navigate(-1)}}>Go Back</button>
    </div>
  )
}
