import styles from './pagination.module.css';

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, pageCount, onPageChange }: PaginationProps) => {
  const pages = [...new Array(pageCount)].map((_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => {
            onPageChange(page - 1);
          }}
          className={currentPage === page - 1 ? styles.activePage : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
