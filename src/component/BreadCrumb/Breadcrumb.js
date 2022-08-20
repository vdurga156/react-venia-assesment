import React from 'react';
import { Link } from 'react-router-dom';
import "../../Style/Filter.scss"
import store from '../../redux/store';

const txtStyle = {
  fontSize: "16px",
  fontFamily: 'Muli',
  paddingRight: "10px",
  color: "inherit"
}
function Breadcrumb({ category }) {
  let categoryId = [category];
  console.log(categoryId);
  category = category.replace('clothing', 'Outerwear');
  const heading = category.split(" ");
  for (var i = 0; i < heading.length; i++) {
    heading[i] = heading[i].charAt(0).toUpperCase() + heading[i].slice(1);
  }
  const productsdata = store.getState();
  const activeIds = [1, 2, 3, 4, 5, 7, 9, 12, 15, 16, 17, 18, 19, 20]
  const products = productsdata.allProducts.products
  const finaldata = products.filter((item) => {
    if (categoryId.includes(item.category) && activeIds.includes(item.id))
      return item;
  });
  console.log("finaldata", finaldata)
  return (
    <div className='container bread'>
      <div className="breadcrumb" >
        <span style={txtStyle}>Clothing / </span><span style={txtStyle}>{heading[0]} </span>{heading[1] ? <span style={txtStyle}><Link to={`/${heading[0].split("'")[0]}`} style={txtStyle}> / {heading[1]}</Link></span> : ""}
      </div>
      <div className="results">
        {finaldata.length} Results
      </div >
    </div>
  )
}

export default Breadcrumb