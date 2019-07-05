import React from 'react';
import styles from './Paginator.module.css';
import PropTypes from 'prop-types';

const Paginator = (props) => {

  return (
    <ul className={styles.paginatorList}>

      {props.pageNumbers.map(number => (
      <li
        key={number}
        id={number}
        className={styles.paginatorItem}
        onClick={props.onClickPaginator}
      >
        {number}
      </li>
    ))}

    </ul>
  );
};

Paginator.propTypes = {
  pageNumbers: PropTypes.array,
  onClickPaginator: PropTypes.func
};

export default Paginator;
