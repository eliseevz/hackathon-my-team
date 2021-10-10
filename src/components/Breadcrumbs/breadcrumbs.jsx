import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getMemberById } from '../../API/API'
import classes from './Breadcrumb.module.css'

const Breadcrumbs = () => {
  const [user, setUser] = useState({})

  const { memberId } = useParams()

  useEffect(() => {
    if (memberId) {
      setUser(getMemberById(Number(memberId)))
    }
  }, [memberId])

  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className={`breadcrumb-item ${!memberId ? classes.active : classes.default}`}>
          <Link to={'/members'}>Все разработчики</Link>
        </li>
        {user && memberId && (
          <li className={`breadcrumb-item ${classes.active}`} aria-current='page'>
            {user.name}
          </li>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
