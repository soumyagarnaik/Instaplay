import React from 'react';
import styles from '../CSS/pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({ pageNumbers, paginate, handleNext, handlePrevious,currentPage }) => {

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faChevronLeft} onClick={() => handlePrevious()} className={styles.icon} />
      {
        pageNumbers.map(number => (
          <div key={number}>
            <h6 style={{ color:currentPage === number ? '#fe6862':'#ffffff', textDecoration: currentPage === number ? 'underline':'none' }} className={styles.page} onClick={() => paginate(number)}>{number}</h6>
          </div>
        ))
      }
      <FontAwesomeIcon icon={faChevronRight} className={styles.icon} onClick={() => handleNext()} />
    </div>
  );
};

export default Pagination;