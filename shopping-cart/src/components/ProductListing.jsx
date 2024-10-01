import React from 'react';
import products from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Available Plants</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
