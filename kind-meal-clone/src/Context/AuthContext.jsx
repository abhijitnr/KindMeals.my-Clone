import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [cartdata, setCartdata] = useState([]);

  function addToRecipe(item) {
    setCartdata([...cartdata, { ...item, quantity: 1 }]);
    alert(`Succefully Redeemed`);
  }

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider
      value={{ cartdata, setCartdata, addToRecipe, isAuth, toggleAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
