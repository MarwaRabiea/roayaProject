import React from 'react';
import './pro.css';
import { useState } from 'react';
const products = [
    { id: 1, img: require('../../image/1.png'), name: ' 1', description: 'hhhhh', price: '75EGP' },
    { id: 2, img: require('../../image/2.png'), name: ' 2', description: 'hhh ', price: '95EGP' },
    { id: 3, img: require('../../image/3.png'), name: '3  ', description: 'hh ', price: '75EGP' },
    { id: 4, img: require('../../image/4.jpg'), name: '4', description: ' h', price: '75EGP' },
    { id: 5, img: require('../../image/5.webp'), name: '5', description: ' hh  ', price: '105EGP' },
    { id: 6, img: require('../../image/6.png'), name: '6', description: 'hh ', price: '105EGP' },
    { id: 7, img: require('../../image/7.png'), name: '7', description: 'hh ', price: '75EGP' },
    { id: 8, img: require('../../image/8.png'), name:  '8', description:  'hh ', price: '75EGP' },
    { id: 9, img: require('../../image/9.png'), name: ' 9', description:  ' hh', price: '95EGP' },
    { id: 10, img: require('../../image/10.png'), name: '  10 ', description: '  hhh', price: '105EGP' },
    { id: 11, img: require('../../image/11.png'), name: ' 11 ', description:  'hhh ', price: '75EGP' },


];
const ProductPage = () => {
   

    return (
        <div className="product-container">
            <h1>منتجاتنا</h1>
            





            <div className="product-cards">
                {products.map((product) => (
                    <div class="single-item" id='testing'>
                        <div class="left-set">
                            <img className='imag1' src={product.img} alt="" />
                        </div>
                        <div class="right-set">
                            <div class="name">{product.name}</div>
                            <div class="description">
                                <p>
                                    {product.description}
                                </p>
                            </div>
                            <div class="price">{product.price}</div>
                           
                            {/* <div class="color">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </div> */}
                            <button class="add-to-cart-button">إضافة إلى سلة المشتريات</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;