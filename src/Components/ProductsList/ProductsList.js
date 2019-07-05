import React from 'react';
import Product from '../Product/Product';
import styles from './ProductsList.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductsList = (props) => {

  const onClickCurrentProduct = (pointId) => {
    const { onClickCurrentProduct, products } = props;

    onClickCurrentProduct(products, pointId);
  }

  return (
    <ul className={styles.wrapper}>

      {props.products.map((product) => (
        <Link
          to={`/pageProduct:${product.id}`}
          className={styles.link}
          key={product.id}
          onClick={() => onClickCurrentProduct(product.id)}
        >
          <Product
            title={product.title}

            discription={product.discription}
            price={product.price}
            rating={product.rating}
          />
        </Link>
      ))}

    </ul>
  )
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    discription: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    rating: PropTypes.string
  })),
  onClickCurrentProduct: PropTypes.func
};

export default ProductsList;
