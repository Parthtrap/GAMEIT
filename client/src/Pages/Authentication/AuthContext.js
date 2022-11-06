import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  email: null,
  login: (email) => { },
  logout: () => { },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);

  const Login = (email) => {
    console.log("Login Auth Context");
    localStorage.setItem("email", JSON.stringify(email));
    setEmail(email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setEmail(null);
  };

  console.log("email");

  if (!isLoggedIn) {
    const email = localStorage.getItem("email");
    const emailData = JSON.parse(email);
    if (emailData) {
      Login(emailData);
    }
  }

  const context = {
    isLoggedIn: isLoggedIn,
    email: email,
    login: Login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
