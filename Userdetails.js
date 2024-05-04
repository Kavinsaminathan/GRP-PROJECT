import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdetails() {
    const Params=useParams()
  return (
    <div>
      Details of the user{Params.userId}
    </div>
  )
}
