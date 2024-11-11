/* eslint-disable */
import axios from "axios";
import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthenContext = createContext({});

export const AuthenProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthenContext.Provider value={{ ...auth }}>{children}</AuthenContext.Provider>;
};

export default function useAuthenContext() {
  return useContext(AuthenContext);
}
