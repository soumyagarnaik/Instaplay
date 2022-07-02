import {MOVIE_LIST_REQUEST,MOVIE_LIST_SUCCESS,MOVIE_LIST_FAIL,
  MOVIE_DETAILS_REQUEST,MOVIE_DETAILS_SUCCESS,MOVIE_DETAILS_FAIL,
  MOVIE_SEARCH_REQUEST,MOVIE_SEARCH_SUCCESS,MOVIE_SEARCH_FAIL} from '../constants/MovieConstants'
import axios from 'axios'

export const getMovieList = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: MOVIE_LIST_REQUEST })
  
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=492396c23de224ab4e1d26a0bbed7f45'
      )
  
      dispatch({
        type: MOVIE_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: MOVIE_LIST_FAIL,
        payload:error
      })
    }
  }
  
  export const getMovieDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: MOVIE_DETAILS_REQUEST })
  
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=492396c23de224ab4e1d26a0bbed7f45`)
  
      dispatch({
        type: MOVIE_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: MOVIE_DETAILS_FAIL,
        payload:error 
      })
    }
  }
  
  export const searchMovie = (queryText) => async (
    dispatch
  ) => {
    try {
      dispatch({ type: MOVIE_SEARCH_REQUEST })
  
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=492396c23de224ab4e1d26a0bbed7f45&query=${queryText}`
      )
  
      dispatch({
        type: MOVIE_SEARCH_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: MOVIE_SEARCH_FAIL,
        payload:error 
      })
    }
  }