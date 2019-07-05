import React from 'react';
import styles from './Product.module.css';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { title, discription, price, rating } = props;

  return (
    <div className={styles.product}>
      <div className={styles.title}>{title}</div>
      <div className={styles.discription}>{discription}</div>
      <div className={styles.price}>{price}
        <span className={styles.currency}>$</span>
      </div>
      <div className={styles.rating}>{rating} рейтинг</div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string,
  discription: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string
};

export default Product;
