// import { createContext, useState } from "react";

// const AuthContext = createContext({
//   isLoggedIn: false,
//   email: null,
//   login: (email) => { },
//   logout: () => { },
// });

// export const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [email, setEmail] = useState(null);

//   const Login = (email) => {
//     console.log("Login Auth Context");
//     localStorage.setItem("email", JSON.stringify(email));
//     setEmail(email);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("email");
//     setIsLoggedIn(false);
//     setEmail(null);
//   };

//   console.log("email");

//   if (!isLoggedIn) {
//     const email = localStorage.getItem("email");
//     console.log({ email });
//     if (email) {
//       Login(email);
//     }
//   }

//   const context = {
//     isLoggedIn: isLoggedIn,
//     email: email,
//     login: Login,
//     logout: logout,
//   };

//   return (
//     <AuthContext.Provider value={context}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  user: null,
  login: (user) => { },
  logout: () => { },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserId(user._id);
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserId(null);
    setUser(null);
  };

  if (!isLoggedIn) {
    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    if (userData) {
      login(userData);
    }
  }


  const context = {
    isLoggedIn: isLoggedIn,
    userId: userId,
    user: user,
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