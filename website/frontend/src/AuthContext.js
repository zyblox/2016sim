import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export function readLoginCookie() {
  const match = document.cookie.match(/(?:^|;\s*)loggedIn=([^;]*)/);
  return match ? match[1] === "1" : false;
}

export function writeLoginCookie(value) {
  document.cookie = `loggedIn=${value ? "1" : "0"}; path=/; max-age=31536000`;
}

export function useAuth() {
  return useContext(AuthContext);
}
