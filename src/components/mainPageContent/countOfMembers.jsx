import React from 'react'
import { allMembers } from '../../API/API'
import classes from './countOfMembers.module.css'

const CountOfMembers = () => {
  const count = allMembers.length
  let phrase = 'человек'

  if (count % 10 > 1 && count % 10 < 5 && Math.floor(count / 10) !== 1) {
    phrase = 'человека'
  }
  return (
    <div className={`${classes.countOfMembers}`}>
      В нашей команде: <span>{count}</span> {phrase}
    </div>
  )
}

export default CountOfMembers
