import React from 'react'
import Products from '../Product-listing/Products';
import Filter from '../Filter/Filter';
import Hero from '../Hero-banner/Hero';
import Breadcrumb from '../BreadCrumb/Breadcrumb';

function Home({ category }) {
    return (
        <>
            <Hero category={category}/>
            <div>
                <Breadcrumb category={category}/>
            </div>
            <div class="aem-Grid aem-Grid--12 container">
                <div class="aem-GridColumn aem-GridColumn--default--3">
                    <Filter />
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <Products category={category} />
                </div>
            </div>
        </>

    )
}

export default Home
