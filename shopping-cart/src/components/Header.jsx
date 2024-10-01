import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
