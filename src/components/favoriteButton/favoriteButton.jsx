import React from 'react'
import classes from './favoriteButton.module.css'
import { switchFavoritStatus } from '../../API/API'

const FavoriteButton = ({ size, id, status }) => {
  return (
    <span className={classes.ico}>
      <i role='button' onClick={() => switchFavoritStatus(id)} style={{ fontSize: size }} className={'bi bi-heart' + (status ? '-fill' : '')}></i>
    </span>
  )
}

export default FavoriteButton
