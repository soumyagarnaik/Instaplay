import React, { useEffect } from 'react'
import styles from '../CSS/moviedetails.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../actions/MovieAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const MovieDetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const movieDetails = useSelector(state => state.movieDetails)
  const { movie } = movieDetails
  useEffect(() => {
    dispatch(getMovieDetails(id))
  }, [dispatch, id])
  return (
    <div className={styles.container}>
      <div className={styles.poster} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
        <Link to='/' style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faArrowLeftLong} style={{ margin: '2rem 2rem 0 2rem', color: '#ffffff' }} /></Link>
        <div className={styles.descriptionContainer}>
          <h3>{movie.original_title}</h3>
          <h5>Rating: <span>{movie.vote_average}/10</span></h5>
          <h4 className={styles.text}>{movie.overview}</h4>
          <h5>Release Date: <span>{new Date().getFullYear(movie.release_date)}</span></h5>
          <h5>original Language: <span>{movie.spoken_languages && movie.spoken_languages.map(data => data.name).join(',')}</span></h5>
        </div>
      </div>

    </div>
  )
}

export default MovieDetailPage