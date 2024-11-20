/* eslint-disable */
import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

export const AuthenContext = createContext({});

export const AuthenProvider = ({ children }) => {
  const auth = useAuth();
  const cart = useCart();
  return <AuthenContext.Provider value={{ ...auth, ...cart }}>{children}</AuthenContext.Provider>;
};

export default function useAuthenContext() {
  return useContext(AuthenContext);
}
