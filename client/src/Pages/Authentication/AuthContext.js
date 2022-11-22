import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userEmail: null,
  login: (userEmail) => { },
  logout: () => { },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const login = (userEmail) => {
    localStorage.setItem("userEmail", JSON.stringify(userEmail));
    setUserEmail(userEmail);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail(null);
  };

  if (!isLoggedIn) {
    const userEmail = localStorage.getItem("userEmail");
    const userData = JSON.parse(userEmail);
    if (userData) {
      login(userData);
    }
  }


  const context = {
    isLoggedIn: isLoggedIn,
    userEmail: userEmail,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;