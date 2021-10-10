import React, {useState, useEffect} from 'react'
import classes from './favoriteButton.module.css'
import { switchFavoritStatus } from '../../../API/API'

const FavoriteButton = ({ size, id, status }) => {

    const [state, setState] = useState(status)

    console.log(state, " this is state")

    const onClickHandler = () => {
        switchFavoritStatus(id)
        setState(!status)
    }

  return (
    <span className={classes.ico}>
      <i role='button'
         onClick={() => onClickHandler()}
         style={{ fontSize: size }}
         className={'bi bi-heart' + (state ? '-fill' : '')}
      >

      </i>
    </span>
  )
}

export default FavoriteButton
