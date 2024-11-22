import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    // console.log("email is", email);
    // console.log("password is", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-500 p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className=" required outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
           value={password}
           onChange={(e) => {
             setPassword(e.target.value)
           }}
            className=" required outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-40 mt-3"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" text-white outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
