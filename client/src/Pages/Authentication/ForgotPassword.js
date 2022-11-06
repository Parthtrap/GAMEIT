import React, { useRef } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef(document.createElement("input"));

  function onForgotPassword(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email === "") {
      console.error("Please Fill all Fields!");
      return;
    }
    console.log({ email });
  }

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Forgot Password?
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
            <Link
              href="/login"
              className="text-xs text-purple-600 hover:underline"
            >
              Log In
            </Link>
            <div className="mt-6">
              <button
                onClick={onForgotPassword}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
