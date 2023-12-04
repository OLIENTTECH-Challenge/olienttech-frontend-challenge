import React from 'react';
import styles from './pagination.module.css';

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, pageCount, onPageChange }) => {
  const pageLinks = [];
  for (let i = 0; i < pageCount; i++) {
    pageLinks.push(
      <button key={i} onClick={() => { onPageChange(i); }} className={currentPage === i ? styles.activePage : ''}>
        {i + 1}
      </button>,
    );
  }

  return (
    <div className={styles.pagination}>
      {currentPage > 0 && <button onClick={() => { onPageChange(currentPage - 1); }}>{'<'}</button>}
      {pageLinks}
      {currentPage < pageCount - 1 && <button onClick={() => { onPageChange(currentPage + 1); }}>{'>'}</button>}
    </div>
  );
};

export default Pagination;
