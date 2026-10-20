import { useState } from "react";
import { AuthContext, readLoginCookie, writeLoginCookie } from "./AuthContext.js";

export default function AuthProvider({ children }) {
  const [loggedIn, setLoggedInState] = useState(readLoginCookie);

  const setLoggedIn = (value) => {
    writeLoginCookie(value);
    setLoggedInState(value);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
