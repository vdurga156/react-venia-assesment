import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';
import heart from "../../Images/heart.jpg";
import "../../Style/Products.scss"
import store from '../../redux/store';
import '../../Style/Banner.scss'
import { getProductsdata } from '../api-data/productsdata';

const itemsPerPage = 12;

const Products = ({ category }) => {
    console.log(category);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            await getProductsdata();


            if (componentMounted) {
                const productsdata = store.getState();
                const response = productsdata.allProducts.products;
                const activeIds = [1, 2, 3, 4, 5, 7,8, 9,10,11, 12,14, 15, 16, 17, 18, 19, 20]
                const finaldata = response.filter((item) => {
                    return activeIds.includes(item.id);
                });
                setData(finaldata);
                const data = finaldata;
                setFilter(data);
                console.log(data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    useEffect(() => {
        if (category) {
            setFilter(data.filter((value) => value.category === category));
        }
    }, [category]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                </div>
            </>
        );
    }
    const ShowProducts = () => {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(filter.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(filter.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % filter.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };
        return (
            <>
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-Grid aem-Grid--12 aem-Grid-default--9">

                        {currentItems?.map((product) => {
                            let backgroundImageURL = product.image;
                            const containerStyle = {
                                backgroundImage:
                                    `url(${backgroundImageURL})`
                            };
                            return (

                                <>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 pd-32">
                                        <div className="Product_card landing" key={product.id}>
                                            < NavLink to={`/products/${product.id}`}>
                                                <div className='product_image' style={containerStyle}>


                                                </div>
                                                <div className="card-bodydesc">
                                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                                     <p className="card-text lead">${product.price}</p>
                                                    <img src={heart} />
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>


                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--5">
                        &nbsp;
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--2 paginationone">
                        <ReactPaginate
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< "
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--5">
                        &nbsp;
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='product'>
            {loading ? <Loading /> : <ShowProducts />}
        </div>
    )
}

export default Products