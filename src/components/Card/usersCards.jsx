import React, { useState } from 'react'
import { allMembers } from '../../API/API'
import UserCard from './userCard'

const UsersCards = () => {
  const [users] = useState(allMembers)

  return (
    <div className='container p-0'>
      <h2 className='mb-4'>Kоманда</h2>
      <div className='row justify-content-center'>
        {users.map((user) => (
          <div key={user.id} className='col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-1'>
            <UserCard {...user} key={user.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersCards
