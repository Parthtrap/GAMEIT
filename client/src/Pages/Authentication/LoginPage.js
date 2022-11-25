import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const emailRef = useRef(document.createElement("input"));
  const passwordRef = useRef(document.createElement("input"));
  const [LoginButtonIsDisabled, setLoginButtonIsDisabled] = useState(false);
  const auth = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    setLoginButtonIsDisabled(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
    if (email === "" || password === "") {
      toast.error("Please Fill all fields", {
        theme: "dark"
      })
      return;
    }
    try {
      const userdata = JSON.stringify({
        email: email,
        password: password,
      });

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userdata,
      });

      const responseData = await response.json();

      setLoginButtonIsDisabled(false);
      // Email Password Matches => Login
      if (response.status === 201) {
        auth.login(responseData.user.email);
      } else {
        console.log(responseData.message);
        toast.error("Incorrect email and password", {
          theme: "dark"
        })
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error("Connectivity issue", {
        theme: "dark"
      })
      return;
    }
    navigate("/");
    toast.success("Successfully logged in", {
      theme: "dark"
    })
  }

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-black">
        <div className="w-full p-6 m-auto rounded-md shadow-md bg-divcol md:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-purple-50">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                className="block w-full px-4 py-2 mt-2 text-purple-300 border rounded-md bg-gr focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-purple-50">
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                autoComplete="password"
                className="block w-full px-4 py-2 mt-2 text-purple-300 border rounded-md bg-gr focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link
              to="/forgotpassword"
              className="text-xs text-purple-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-6">
              <button
                onClick={onLogin}
                disabled={LoginButtonIsDisabled}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-purple-50">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
