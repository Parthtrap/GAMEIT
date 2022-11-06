import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function LoginPage() {
  const emailRef = useRef(document.createElement("input"));
  const passwordRef = useRef(document.createElement("input"));
  const auth = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "" || password === "") {
      console.error("Please Fill all fields");
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

      // Email Password Matches => Login
      if (response.status === 201) {
        auth.login(responseData.user);
        console.log({ "user": responseData.user });
      } else {
        console.log(responseData.error);
      }
    } catch (err) {
      console.log(err);
      return;
    }
    navigate("/");
  }

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                autoComplete="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link
              href="/forgotpassword"
              className="text-xs text-purple-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-6">
              <button
                onClick={onLogin}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/signup"
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
