import React, { useEffect, useState } from 'react'
import { allMembers } from '../API/API'
import UserCard from '../components/Card/userCard'

const Favorite = () => {
  const [users, setUsers] = useState()
  const [favoriteUsers, setFavoriteUsers] = useState()

  useEffect(() => {
    setUsers(allMembers)
  }, [])

  // useEffect(() => {
  //   setFavoriteUsers((prevState) => {
  //     users.map((user) => {
  //       if (user.isFavorite) {
  //         new Array(...[prevState, user])
  //       }
  //     })
  //   })
  // }, [users])

  if (users) {
    const elem = users.find((user) => user.isFavorite)

    if (elem !== undefined) {
      return (
        <div className='container d-flex flex-wrap mt-5'>
          {users.map((user) => (
            <div style={{ padding: 3, minWidth: '45vh' }} key={user.id}>
              {user.isFavorite && <UserCard {...user} key={user.id} />}
            </div>
          ))}
        </div>
      )
    }
  }
  return (
    <div style={{ weidth: '100%', height: '20vh', margin: '20vh auto 40vh auto', textAlign: 'center' }}>
      <h1>Вы еще не добавили никого в избранное</h1>
    </div>
  )
}

export default Favorite
