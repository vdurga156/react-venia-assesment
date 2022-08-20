import { getProducts } from './api/productsApi';
import React, { Component } from 'react';
import { connect } from 'react-redux';
export const Product = (products) => {
  console.log(products);
}
class ProductListing extends Component {
  componentDidMount() {
    if (!this.props.products)
      this.refreshSites();

  }
  refreshSites() {
    getProducts();
  }
  render() {
    return (
      <div>
        {this.props.products &&
          <Product products={this.props.products} />
        }
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    sites: store.productState.products
  };
};

export default connect(mapStateToProps)(ProductListing);