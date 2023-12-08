import React from 'react';
import './pro.css';
import { useState } from 'react';
const products = [
    { id: 1, img: require('../../image/1.png'), name: 'ليطمئن قلبي', description: 'أدهم الشرقاوي', price: '75EGP' },
    { id: 2, img: require('../../image/2.png'), name: 'القصص القرآني', description: 'محمد شحرور', price: '95EGP' },
    { id: 3, img: require('../../image/3.png'), name: 'إلى المنكسرة قلوبهم', description: 'أدهم الشرقاوي', price: '75EGP' },
    { id: 4, img: require('../../image/4.jpg'), name: ' عندما ألتقيت عمر بن الخطاب', description: 'أدهم الشرقاوي', price: '75EGP' },
    { id: 5, img: require('../../image/5.webp'), name: 'لأنك اللَه', description: 'علي بن جابر الفيفي', price: '105EGP' },
    { id: 6, img: require('../../image/6.png'), name: 'ما لا يسع المسلم جهله', description: 'أنس السلطان', price: '105EGP' },
    { id: 7, img: require('../../image/7.png'), name: 'السلام عليك يا صاحبي', description: 'أدهم الشرقاوي', price: '75EGP' },
    { id: 8, img: require('../../image/8.png'), name: 'مع النَبي', description:  'أدهم الشرقاوي', price: '75EGP' },
    { id: 9, img: require('../../image/9.png'), name: 'القصص القرآني', description:  'محمد شحرور', price: '95EGP' },
    { id: 10, img: require('../../image/10.png'), name: 'التربية والتعليم في الإسلام', description: 'محمد أسعد طلس', price: '105EGP' },
    { id: 11, img: require('../../image/11.png'), name: 'على خطى الرسول', description:  'أدهم الشرقاوي', price: '75EGP' },


];
const ProductPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortOrder, setSortOrder] = useState('lowToHigh'); // 'lowToHigh', 'highToLow'
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const sortProducts = (order) => {
        const sorted = [...filteredProducts].sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            return order === 'lowToHigh' ? priceA - priceB : priceB - priceA;
        });

        setFilteredProducts(sorted);
        setSortOrder(order);
    };

    const filterByPriceRange = () => {
        const filtered = products.filter((product) => {
            const price = parseFloat(product.price.replace('$', ''));
            return (!minPrice || price >= parseFloat(minPrice)) && (!maxPrice || price <= parseFloat(maxPrice));
        });

        setFilteredProducts(filtered);
    };

    const clearFilters = () => {
        setFilteredProducts(products);
        setSortOrder('lowToHigh');
        setMinPrice('');
        setMaxPrice('');
    };

    return (
        <div className="product-container">
            <h1>Our Products</h1>
            <div className="filter-options">

                <div>
                    <label>Min Price:</label>
                    <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                    <label>Max Price:</label>
                    <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    <button onClick={filterByPriceRange}>Apply Filter</button>
                    <button onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>



            <div className="filter-options" style={{ justifyContent: 'flex-start' }}>
                <div>
                    <button onClick={() => sortProducts('lowToHigh')}>Sort: Low to High</button>
                    <button onClick={() => sortProducts('highToLow')}>Sort: High to Low</button>
                </div>
            </div>



            <div className="product-cards">
                {filteredProducts.map((product) => (
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