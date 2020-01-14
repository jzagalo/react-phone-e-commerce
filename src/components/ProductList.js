import React, { Component } from 'react'
import Product from "./Product";

import Title from './Title';
import { ProductConsumer } from '../context';

export class ProductList extends Component {
  
    render() {    
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our"  title="products" />
                        <div className="row">
                            <ProductConsumer>
                                { value => { 
                                    const { products } = value;
                                    return products
                                    .map( product => { return <Product key={product.id} product={product} /> })
                                    }
                                }         
                            </ProductConsumer>
                        </div>                    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList
