import React, { Component } from 'react';
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel></Carousel>
                <ProductList></ProductList>
            </div>
        );
    }
}

export default Home;
