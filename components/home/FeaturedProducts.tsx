import React from 'react';
import {fetchFeaturedProducts} from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

async function FeaturedProducts() {

    const products = await fetchFeaturedProducts();

    if(products.length === 0) return <EmptyList/>;



    return (
        <section className='pt-24'>
            <SectionTitle text='Featured Products'/>
            <ProductsGrid products={products}/>
        </section>
    );
}

export default FeaturedProducts;