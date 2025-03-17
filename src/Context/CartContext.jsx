import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize with empty array instead of [1,2]
  const [carts, setCarts] = useState([]);
  
  const AddtoCart = (item) => {
    const itemExist = carts.findIndex((cart) => cart.id === item.id);
    
    if (itemExist !== -1) {
      // Item exists in cart, update quantity
      const newCart = [...carts];
      newCart[itemExist] = {
        ...newCart[itemExist],
        quantity: newCart[itemExist].quantity + 1
      };
      setCarts(newCart);
    } else {
      // Item doesn't exist in cart, add it
      setCarts([...carts, { ...item, quantity: 1 }]);
    }
  };
  
  const value = {
    carts,
    AddtoCart,
  };
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};