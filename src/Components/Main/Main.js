import React, {Component} from 'react';
import styles from './Main.module.css';
import {Route, Switch} from 'react-router-dom';
import data from '../../data/Products.json';
import PageCatalog from '../PageCatalog/PageCatalog';
import PageProduct from '../PageProduct/PageProduct';

class Main extends Component {

  state = {
    inputValue: '',
    filter: '',
    currentPage: 1,
    productPage: 4,
  }

  onChangeInputValue = (event) => {
    this.setState({inputValue: event.currentTarget.value});
  };

  isMatching = (full, chunk) => full.toLowerCase().indexOf(chunk.toLowerCase()) > -1;

  getFilterValue = (filterValue) => {
    this.setState({filter: filterValue});
  };

  onClickPaginator = event => this.setState({ currentPage: Number(event.target.id) } );

  onClickCurrentProduct = (list, pointId) => {
    this.currentProduct = list.filter(item => {
      return item.id === pointId
    });
  };

  render() {
    const {filter, inputValue, currentPage, productPage} = this.state;
    const products = data.products;

    let filteredProducts = [];
    let pageNumbers = [];

    if(filter === '') filteredProducts = products;
    if(filter === 'brand') filteredProducts = products.filter(product => product.brand === 'true');
    if(filter === 'price') filteredProducts = products.sort((a, b) => a.price - b.price)
    if(filter === 'rating') filteredProducts = products.sort((a, b) => b.rating - a.rating);
    if(inputValue !== '') filteredProducts = products.filter(product => this.isMatching(product.title, inputValue));

    const indexOfLastProducts = currentPage * productPage;
    const indexOfFirstProducts = indexOfLastProducts - productPage;
    const currentList = filteredProducts.slice(indexOfFirstProducts, indexOfLastProducts);

    for(let i = 1; i <= Math.ceil(filteredProducts.length / productPage); i++) {
      pageNumbers.push(i);
    };

    return (
      <div className={styles.main}>
        <Switch>
          <Route exact path='/' render={() =>
            <PageCatalog
              currentList={currentList}
              inputValue={this.state.inputValue}
              onChangeInputValue={this.onChangeInputValue}
              onFilterChange={this.getFilterValue}
              pageNumbers={pageNumbers}
              onClickPaginator={this.onClickPaginator}
              onClickCurrentProduct={this.onClickCurrentProduct}
            /> }
          />
          <Route path='/pageProduct:id' render={() =>
            <PageProduct
              product={this.currentProduct}
            />}
          />
        </Switch>
      </div>
    );
  }
};

export default Main;
