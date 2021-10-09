import React from 'react'
import { useParams } from 'react-router-dom'

const Members = () => {
  const params = useParams()

  const memberId = params.memberId
  if (memberId) {
    return <h1>Member: {memberId}</h1>
  }
  return <h1>Members</h1>
}

export default Members
