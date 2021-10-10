import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { allMembers } from '../API/API'
import Badge from '../components/UI/badge/badge'
import Progress from '../components/progress/progress'
import classes from './members.module.css'

const Members = () => {
  const [userChoose, setUserChoose] = useState(allMembers)
  const params = useParams()
  const memberId = params.memberId
  if (memberId) {
    return (
        <div className='container d-flex flex-column pt-5'>
          <div className='d-flex align-items-center'>
            <h1>{userChoose[memberId].name}</h1>
            <div className='d-flex flex-row'>
              {userChoose[memberId].role.map((role) => (
                  <span>
                <Badge color={role.type} content={role.name} />
              </span>
              ))}
            </div>
            <i class='bi bi-heart' style={{ fontSize: '20px' }}></i>
          </div>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <img src={userChoose[memberId].imageURL} alt='img' className={classes.members__image} />
              <div className='mt-2 mb-2'>
                {userChoose[memberId].socialMedia.map(({ name, link }) => (
                    <a href={link} className='pe-2 ' style={{ color: '#fff' }}>
                      <i className={`social__media bi bi-${name}`} style={{ fontSize: '30px' }} />
                    </a>
                ))}
              </div>
            </div>
            <div className='container d-flex flex-column'>
            <span>
              <b>Страна:</b> {userChoose[memberId].county}
            </span>
              <span>
              <b>Возраст: </b>
                {userChoose[memberId].age}
            </span>
              <span>
              <b>О себе: </b>
                {userChoose[memberId].about}
            </span>
              <span>
              <b>Участие в данном проекте: </b>
                {userChoose[memberId].impact}
            </span>
              <div className='d-flex'>
              <span>
                <b>Стэк технологий:</b>{' '}
              </span>
                {userChoose[[memberId]].stack.map(({ name }) => (
                    <span key={name}>{name}</span>
                ))}
              </div>
              <div className={classes.progress__container}>
                <span>Прогресс: </span>
                {userChoose[[memberId]].stack.map(({ name, prog }) => (
                    <Progress name={name} percent={prog} />
                ))}
              </div>
            </div>
          </div>
        </div>
    )
  }
  return (
      <div className='container'>
        <h1>Members</h1>
      </div>
  )
}

export default Members