import React, { useState, useEffect } from 'react';
import './PostCard.css'; // Import CSS for styling

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-label">Ad</div>
            <img src={product.photos} alt={product.adTitle} className="product-image" />
            <h2 className="product-name">{product.adTitle}</h2>
            <p className="product-price">₹ {product.price.toLocaleString()}</p>
            <p className="product-location">{product.category}</p>
            <p className="product-date">Year: {product.year}</p>
            <p className="product-condition">Condition: {product.condition}</p>
            <p className="product-storage">Storage: {product.storage}</p>
            <p className="product-color">Color: {product.color}</p>
            <p className="product-description">{product.description}</p>
        </div>
    );
};

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/ads')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!products.length) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
