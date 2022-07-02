import React, { useEffect, useState } from 'react'
import styles from '../CSS/homepage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../actions/MovieAction'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const HomePage = () => {
  const dispatch = useDispatch()
  const [movieListDetails, setMovieListDetails] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState('');
  const [deviceWidth, setDeviceWidth] = useState(undefined);
  const movieList = useSelector(state => state.movieList)
  const movieSearch = useSelector(state => state.movieSearch)
  const { movies } = movieList
  const { searchedMovies } = movieSearch
  useEffect(() => {
    dispatch(getMovieList())
  }, [dispatch])
  useEffect(() => {
    if (searchedMovies && searchedMovies.results && searchedMovies.results.length > 0) {
      setMovieListDetails(searchedMovies.results)
    } else {
      setMovieListDetails(movies.results)
    }
  }, [movies, searchedMovies])
  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    deviceWidth && deviceWidth > 1200 ? setPostsPerPage(12) : deviceWidth > 1020 ? setPostsPerPage(9) : deviceWidth > 760 ? setPostsPerPage(6) : setPostsPerPage(3)
  }, [deviceWidth])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movieListDetails && movieListDetails.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movieListDetails && movieListDetails.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const handleNext = () => currentPage === Math.max(...pageNumbers) ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 1)
  const handlePrevious = () => currentPage === 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1)

  return (
    <div className={styles.container}>
      <div className={styles.poster}></div>
      <div className={styles.movieContainer}>
        <h3 className={styles.title}>Trending</h3>
        <div className={styles.movieDashboard}>
          {
            currentPosts && currentPosts.map(movieData => (
              <div key={movieData.id} >
                <MovieCard details={movieData} />
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination
          paginate={paginate}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          pageNumbers={pageNumbers} 
          currentPage={currentPage}/>
      </div>
    </div>
  )
}

export default HomePage