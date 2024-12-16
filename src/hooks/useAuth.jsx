import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [uid, setUid] = useState(null);
  const [token, setToken] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUid = localStorage.getItem("uid");
    const getToken = localStorage.getItem("token");
    const getExpiry = localStorage.getItem("expiry");
    if (getUid && getToken && getExpiry) {
      setUid(getUid);
      setToken(getToken);
      setExpiry(getExpiry);
    }
  }, []);

  const loginWithGoogle = async (responseData) => {
    try {
      if (responseData.check) {
        saveAuthInfo(responseData);
        setUid(responseData.uid);
        setToken(responseData.token);
        setExpiry(responseData.expiry);

        window.notyf.success("Đăng nhập thành công!");
        setTimeout(() => navigate("/", { replace: true }), 2000);
      } else {
        window.notyf.error("Đăng nhập với Google thất bạn!");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      window.notyf.error("Có lỗi xảy ra khi đăng nhập với Google!");
    }
  };

  const login = async ({ ...data }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { ...data });
      if (response.data.check === true) {
        saveAuthInfo(response.data);
        window.notyf.success("Đăng nhập thành công!");
        setTimeout(() => {
          setUid(response.data.uid);
          setToken(response.data.token);
          setExpiry(response.data.expiry);
          navigate("/", { replace: true });
        }, 2000);
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      window.notyf.error(error.response.data.message);
    }
  };

  const register = async ({ ...data }) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/register`, { ...data })
        .then((response) => {
          if (response.data.check === true) {
            window.notyf.success("Đăng ký thành công!");
            setTimeout(() => navigate("/dang-nhap"), 2000);
          }
        })
        .catch((error) => {
          window.notyf.error(error.response.data.message);
        });
    } catch (error) {
      window.notyf.error(error.response.data.message);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });

      if (response.data.check === true) {
        clearAuthInfo();
        window.notyf.success(response.data.message);
        setTimeout(() => {
          setUser(null);
          navigate("/dang-nhap", { replace: true });
        }, 2000);
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getInfoUser = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/customers", { headers: { Authorization: `Bearer ${token}` } });
        setUser(response.data.data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };
    if (uid && token && expiry) {
      getInfoUser();
    } else {
      setUser(null);
    }
  }, [uid, token, expiry]);

  useEffect(() => {
    if (token && expiry) {
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);

      if (currentTimestamp >= expiry) {
        console.log("Token đã hết hạn, đang logout...");
        logout();
      } else {
        const timeUntilExpiry = expiry - currentTimestamp;

        const timer = setTimeout(() => {
          console.log("Token hết hạn, đang logout...");
          logout();
        }, timeUntilExpiry * 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [token, expiry]);

  const saveAuthInfo = ({ uid, token, expiry }) => {
    localStorage.setItem("uid", uid);
    localStorage.setItem("token", token);
    localStorage.setItem("expiry", expiry);
  };

  const clearAuthInfo = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
  };

  return { user, token, loginWithGoogle, login, register, logout };
};
