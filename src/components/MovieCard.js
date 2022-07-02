import React from 'react'
import styles from '../CSS/movieCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { details } = props
  return (
    <div className={styles.cardConatiner} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${details.poster_path})` }}>
      <div className={styles.titleContainer}>
        <div className={styles.leftSide}>
          <span className={styles.title}>{details.original_title}</span>
          <span className={styles.rating}><FontAwesomeIcon style={{ color: 'yellow', margin: '0 5px' }} icon={faStar} />{details.vote_average} /10</span>
        </div>
        <div>
          <Link to={`/movies/${details.id}`}><FontAwesomeIcon className={styles.playButton} icon={faCirclePlay} /></Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard