import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useAuth();

  const addToCart = async ({ ...data }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/carts`, { ...data }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.check === true) {
        window.notyf.success(response.data.message);
        // Refresh cart items after adding a new item
        await show();
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      window.notyf.error("Có lỗi xảy ra khi thêm vào giỏ hàng");
    }
  };

  const show = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/carts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.check === true) {
        setCartItems(response.data.data || []);
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      window.notyf.error("Có lỗi xảy ra khi lấy dữ liệu giỏ hàng");
    }
  };

  useEffect(() => {
    if (token) {
      show();
    }
  }, [token]);

  return { cartItems, addToCart };
};
