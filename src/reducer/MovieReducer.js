import {MOVIE_LIST_REQUEST,MOVIE_LIST_SUCCESS,MOVIE_LIST_FAIL,
    MOVIE_DETAILS_REQUEST,MOVIE_DETAILS_SUCCESS,MOVIE_DETAILS_FAIL,
    MOVIE_SEARCH_REQUEST,MOVIE_SEARCH_SUCCESS,MOVIE_SEARCH_FAIL} from '../constants/MovieConstants'

export const movieListReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
      case MOVIE_LIST_REQUEST:
        return { loading: true, movies: [] }
      case MOVIE_LIST_SUCCESS:
        return {
          loading: false,
          movies: action.payload
        }
      case MOVIE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
    
    export const movieDetailsReducer = (
      state = { movie: { } },
      action
    ) => {
      switch (action.type) {
        case MOVIE_DETAILS_REQUEST:
          return { ...state, loading: true }
        case MOVIE_DETAILS_SUCCESS:
          return { loading: false, movie: action.payload }
        case MOVIE_DETAILS_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }

    export const movieSearchReducer = (state = { searchedMovies: [] }, action) => {
        switch (action.type) {
          case MOVIE_SEARCH_REQUEST:
            return { loading: true, searchedMovies: [] }
          case MOVIE_SEARCH_SUCCESS:
            return {
              loading: false,
              searchedMovies: action.payload
            }
          case MOVIE_SEARCH_FAIL:
            return { loading: false, error: action.payload }
          default:
            return state
        }
      }