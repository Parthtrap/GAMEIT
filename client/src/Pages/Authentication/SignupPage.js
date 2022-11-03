import React, { useRef } from "react";

function Signup() {
  const usernameRef = useRef(document.createElement("input"));
  const emailRef = useRef(document.createElement("input"));
  const passwordRef = useRef(document.createElement("input"));
  const confirmpasswordRef = useRef(document.createElement("input"));
  const genderRef = useRef(document.createElement("input"));
  const dateOfBirthRef = useRef(document.createElement("input"));

  function onSignup(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmpassword = confirmpasswordRef.current.value;
    const gender = genderRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;
    if (confirmpassword != password) {
      console.error("Password != confirm Password");
      return;
    }
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      dateOfBirth === ""
    ) {
      console.error("Please fill all fields");
      return;
    }
    console.log({ username, email, password, gender, dateOfBirth });
  }

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign Up
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Username
              </label>
              <input
                type="text"
                ref={usernameRef}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Confirm Password
              </label>
              <input
                type="password"
                ref={confirmpasswordRef}
                autoComplete="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <div className="relative w-full lg:max-w-sm">
                <label className="block text-sm font-semibold text-gray-800">
                  Gender
                </label>
                <select
                  ref={genderRef}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                  <option>Rather not say</option>
                </select>
              </div>
            </div>
            <div className="mb-2">
              <div className="relative w-full lg:max-w-sm">
                <label className="block text-sm font-semibold text-gray-800">
                  Date of Birth
                </label>
                <input
                  type="date"
                  ref={dateOfBirthRef}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={onSignup}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-purple-600 hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;