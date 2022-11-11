import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Authentication/AuthContext";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const auth = useContext(AuthContext);

  const onLogout = () => {
    auth.logout();
  };

  return (
    <nav className="fixed top-0 z-50 w-full shadow-sm bg-divcol shadow-purple-500/50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">

        <div className="">
          <div className="flex items-center justify-between py-4 md:block">

            <div className="md:hidden">
              <button className="p-2 text-purple-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setNavbar(!navbar);
                  setSidebar(false);
                }}>

                {/* left side dropdown button*/}
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <Link to="/">
              <h2 className="text-2xl font-bold text-purple-100">GAMEIT</h2>
            </Link>

            {/* right side dropdown button*/}
            <div className="hidden">
              <button
                className="p-2 text-purple-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setSidebar(!sidebar);
                  setNavbar(false);
                }}
              >
                {sidebar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        <div>

          {/* left side wala */}
          <div className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              {auth.isLoggedIn ? (
                <>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to={"/profile/" + auth.user.email} onClick={() => { setNavbar(false) }}>Profile</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/post/new" onClick={() => { setNavbar(false) }}>New Post</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/help" onClick={() => { setNavbar(false) }}>Help</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/notes" onClick={() => { setNavbar(false) }}>Notes</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/todo" onClick={() => { setNavbar(false) }}>To-Do List</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/" onClick={auth.logout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/help">Help</Link>
                  </li>
                </>
              )}
            </ul>
          </div>


          {/* right side wala menu */}
          <div className={`flex-1 justify-self-center text-gray-500 pb-3 mt-1 md:hidden hidden`}>
            Hello
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

