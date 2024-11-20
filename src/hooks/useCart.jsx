import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useAuth();

  const addToCart = async ({ ...data }) => {
    if (!token) {
      window.notyf.error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/carts`, { ...data }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.check === true) {
        window.notyf.success(response.data.message);
        await show();
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      window.notyf.error(error.response.data.message);
    }
  };

  const updateCart = async ({ id, ...data }) => {
    if (!token) {
      window.notyf.error("Bạn cần đăng nhập để cập nhật giỏ hàng");
      return;
    }

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/carts/${id}`, { ...data }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.check === true) {
        window.notyf.success(response.data.message);
        await show();
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      window.notyf.error(error.response.data.message);
    }
  };

  const removeFromCart = async (id) => {
    if (!token) {
      window.notyf.error("Bạn cần đăng nhập để cập nhật giỏ hàng");
      return;
    }

    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/carts/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.check === true) {
        window.notyf.success(response.data.message);
        await show();
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      window.notyf.error(error.response.data.message);
    }
  };

  const show = async () => {
    if (!token) {
      window.notyf.error("Bạn cần đăng nhập để xem giỏ hàng");
      return;
    }

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
      window.notyf.error("Có lỗi xảy ra khi lấy dữ liệu giỏ hàng");
    }
  };

  useEffect(() => {
    if (token) {
      show();
    }
  }, [token]);

  return { cartItems, addToCart, updateCart, removeFromCart };
};
