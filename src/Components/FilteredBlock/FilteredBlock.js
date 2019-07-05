import React from 'react';
import styles from './FilteredBlock.module.css';
import PropTypes from 'prop-types';

const FilteredBlock = (props) => {

  const handleFilterChange = (event) => {
    props.onFilterChange(event.currentTarget.dataset.value);
  };

  return (
    <div className={styles.filteredProducts}>
      <button className={styles.button} onClick={handleFilterChange} data-value='brand'>Бренд</button>
      <button className={styles.button} onClick={handleFilterChange} data-value='price'>Цена</button>
      <button className={styles.button} onClick={handleFilterChange} data-value='rating'>Рейтинг</button>
    </div>
  )
};

FilteredBlock.propTypes = {
  onFilterChange: PropTypes.func
};

export default FilteredBlock;
