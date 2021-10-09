import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs/breadcrumbs'

const Members = () => {
 
  const params = useParams()

  const memberId = params.memberId
  if (memberId) {
    return <div className="container">
       <Breadcrumbs />
      <h1>Member: {memberId}</h1>
    </div>
  }
  return <div className="container">
     <Breadcrumbs />
     <h1>Members</h1>
  </div>
}

export default Members
