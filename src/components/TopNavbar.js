import React,{useState} from 'react'
import styles from '../CSS/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faPlay } from '@fortawesome/free-solid-svg-icons'
import {Link,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {searchMovie} from '../actions/MovieAction'

const TopNavbar = () => {
  const {pathname}  = useLocation()
  const dispatch = useDispatch()
  const [text,setText] = useState('')
  const searchHandler = () =>{
    dispatch(searchMovie(text))
    setText('')
  }
  return (
    <div className={styles.body}>
        <div>
            <Link to='/' style={{ textDecoration: 'none' }}><h3 className={styles.title}><span style={{ color:'#FF6662'}}>I</span>nsta Pl<span style={{ color:'#FF6662',fontSize:'25px'}}> <FontAwesomeIcon icon={faPlay} /></span> y</h3></Link>
        </div>
        {
          pathname === '/' && (
          <div className={styles.inputContainer}>
            <input type='text' placeholder='search movies' className= {styles.input} value={text} onChange={e=>setText(e.target.value)} />
            <button className= {styles.searchBox} onClick={searchHandler}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
          )
        }
        
    </div>
  )
}

export default TopNavbar