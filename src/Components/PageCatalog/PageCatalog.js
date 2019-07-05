import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import SearchProducts from '../SearchProducts/SearchProducts';
import FilteredBlock from '../FilteredBlock/FilteredBlock';
import Paginator from '../Paginator/Paginator';
import styles from './PageCatalog.module.css';
import PropTypes from 'prop-types';

const PageCatalog = (props) => {
  const {
    inputValue,
    onChangeInputValue,
    currentList,
    pageNumbers,
    onClickCurrentProduct,
    onClickPaginator,
    onFilterChange} = props;

  return(
    <div className={styles.main}>
      <SearchProducts inputValue={inputValue} onChangeInputValue={onChangeInputValue} />
      <FilteredBlock onFilterChange={onFilterChange} />
      <ProductsList  products={currentList} onClickCurrentProduct={onClickCurrentProduct} />
      <Paginator pageNumbers={pageNumbers} onClickPaginator={onClickPaginator} />
    </div>
  );
};

PageCatalog.propTypes = {
  inputValue: PropTypes.string,
  onChangeInputValue: PropTypes.func,
  currentList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    discription: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    rating: PropTypes.string
  })),
  pageNumbers: PropTypes.array,
  onClickCurrentProduct: PropTypes.func,
  onClickPaginator: PropTypes.func,
  onFilterChange: PropTypes.func
};

export default PageCatalog;
