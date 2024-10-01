// src/redux/reducers/cartReducer.js
const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        let updatedItems;
        if (existingItemIndex >= 0) {
          // Item already in cart
          updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
        } else {
          // New item
          updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        }
  
        const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        return {
          ...state,
          items: updatedItems,
          totalCount,
          totalPrice,
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      case 'INCREMENT_ITEM':
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case 'DECREMENT_ITEM':
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload.id && item.quantity > 1 
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  