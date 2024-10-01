import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';

const ShoppingCart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)} x {item.quantity}</span>
                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
