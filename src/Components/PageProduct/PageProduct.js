import React from 'react';
import styles from './PageProduct.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PageProduct = (props) => {

  return (
    <div>
      {props.product.map(({ title, price, discription, rating, id}) => (
        <div className={styles.wrapper} key={id}>
          <div className={styles.product}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
            <div className={styles.discription}>{discription}</div>
            <div className={styles.rating}>{rating} рейтинг</div>
          </div>

        <Link to='/'>
          <button className={styles.button}>Назад...</button>
        </Link>
      </div>
      ))}
    </div>
  )
};

PageProduct.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    discription: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    rating: PropTypes.string
  }))
};

export default PageProduct;
