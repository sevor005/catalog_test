import React from 'react';
import styles from './SearchProducts.module.css';
import PropTypes from 'prop-types';

const SearchProducts = (props) => {

  return (
    <div>
      <input
        className={styles.input}
        value={props.inputValue}
        onChange={props.onChangeInputValue}
        placeholder='введите название...'
      />
    </div>
  )
};

SearchProducts.propTypes = {
  inputValue: PropTypes.string,
  onChangeInputValue: PropTypes.func
};

export default SearchProducts;
