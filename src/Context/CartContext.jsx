import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, use, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {fetchCart}, []);
    const fetchCart = async () => {
      try {
        const carts = await AsyncStorage.getItem("carts");
        if (carts) {
          setCarts(JSON.parse(carts));
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  

  const AddtoCart = async (item) => {
    try {
      const itemExist = carts.findIndex((cart) => cart.id === item.id);

      if (itemExist !== -1) {
        // Item exists, update quantity
        const newCart = [...carts];
        newCart[itemExist] = {
          ...newCart[itemExist],
          quantity: newCart[itemExist].quantity + 1,
        };
        setCarts(newCart);
        await AsyncStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        // Item doesn't exist, add it
        const updatedCart = [...carts, { ...item, quantity: 1 }];
        setCarts(updatedCart);
        await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const value = {
    carts,
    AddtoCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
