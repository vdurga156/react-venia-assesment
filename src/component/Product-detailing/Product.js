import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "../../Style/Product.scss";
import Swatchone from '../../Images/Swatch 01.png';
import Swatchtwo from '../../Images/Swatch 02.png';
import Swatchthree from '../../Images/Swatch 03.png';
import Swatchfour from '../../Images/Swatch 04.png';
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
const Product = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);



    const ShowProduct = () => {
        return (
            <>
                <div className='container'>
                    <div class="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12 p-6">
                            <img src={product.image} alt={product.title} height="100px" width="80px" />
                            <img src={product.image} alt={product.title} height="100px" width="80px" />
                            <img src={product.image} alt={product.title} height="100px" width="80px" />
                            <img src={product.image} alt={product.title} height="100px" width="80px" />
                            <img src={product.image} alt={product.title} height="100px" width="80px" />

                        </div>

                        <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 oneprice">

                            <img src={product.image} alt={product.title} width="380px" />
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 rating-one">
                            <h6 className='desktop'>Clothing / Women’s / Outerwear</h6>
                            <h2>{product.title}</h2>
                            <p>  $ {product.price} </p>
                            <p className="lead fw-bolder">
                                <div className='star-section'>
                                    <ul>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FiStar /></i>
                                        </ul>
                                </div>
                            </p>
                            <p className='product-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor labore et dolore magna</p>
                            <hr />
                            <div className="swatch">
                                <h5>Colors</h5>
                                <img src={Swatchone} className="swatchone" alt="image1" />
                                <img src={Swatchtwo} className="swatchtwo" alt="image2" />
                                <img src={Swatchthree} className="swatchthree" alt="image2" />
                                <img src={Swatchfour} className="swatchfour" alt="image2" />
                            </div>
                            <div className='size'>
                                <h5>Size</h5>
                                <span >XS</span>
                                <span >S</span>
                                <span >M</span>
                                <span >L</span>
                                <span >XL</span>
                            </div>
                            <br />
                            <div className='static'>
                                <h5 class="button-quantity">Quantity</h5>
                                <div className="input-group w-auto align-items-center">
                                    <input
                                        type="button"
                                        value="-"
                                        className="button-minus border rounded-circle"
                                        data-field="quantity"
                                        onClick={() => onRemove(product)}
                                    />&nbsp;&nbsp;
                                    <h6 className="quant">{cartItems?.find((x) => x.id === product.id)?.qty || 1}</h6>&nbsp;&nbsp;
                                    <input
                                        type="button"
                                        value="+"
                                        className="button-plus border rounded-circle"
                                        data-field="quantity"
                                        onClick={() => onAdd(product)}
                                    />
                                </div>
                            </div><br />
                            <br />
                            <button className="adding-item"
                                onClick={() => onAdd(product)}
                            >Add to Cart</button>
                            <div className='icn'>

                                <a href="#">< AiOutlineHeart />save</a>
                                <a href="#"><BiShareAlt />share</a>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='product-title'>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 Sweat-wicking">
                            <h4>{product.title}</h4>
                            <h5>Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur. Duis tristique sollicitudin nibh sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</p>
                        </div>


                    </div>
                </div>

            </>
        )
    }
    return (
        <div>

            {<ShowProduct onAdd={onAdd} />}
        </div>

    )
}

export default Product