import {FC} from 'react'
import classes from './Pagination.module.css';

interface Props{
    rowsPerPage:number;
    total:number;
    currentPage:number;
    paginate?:(num:number)=> void;
}


const Pagination:FC<Props> = ({ rowsPerPage, total, paginate,currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='py-2'>      
        <nav className='block'>
          <ul className={classes.pagination}>
            <li>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => {
                   paginate && paginate(number);
                  }}
                 
                  className={
                    currentPage === number
                      ? classes.paginationCurrentNumber
                      : classes.paginationNumbers
                  }
                >
                  {number}
                </button>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Pagination;
