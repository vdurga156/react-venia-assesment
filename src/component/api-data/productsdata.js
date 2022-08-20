import store from '../../redux/store';
import { getProducts } from '../../redux/actions/productsActions'
const productRestApi = "https://fakestoreapi.com/products";
export const getProductsdata = async () => {
  await fetch('https://fakestoreapi.com/products').then(function (res) {
    return res.json();
  }).then(function (json) {
    console.log(json)
    store.dispatch(getProducts(json));
  });
};