import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggleSignUpSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute top-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="p-12 bg-zinc-950 relative w-3/12 my-36 mx-auto flex flex-col justify-between right-0 left-0 rounded-md bg-opacity-90">
        <span className="text-4xl font-bold text-white px-5 py-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </span>
        <input
          type={"text"}
          placeholder="Email Address"
          className="p-4 m-3 bg-zinc-900"
        />
        {!isSignInForm && <input
          type={"text"}
          placeholder="Full Name"
          className="p-4 m-3 bg-zinc-900 rounded-sm border-zinc-300 text-white"
        />}
        <input
          type={"text"}
          placeholder="password"
          className="p-4 m-3 bg-zinc-900 rounded-sm border-zinc-300 text-white"
        />
        <button className="bg-red-700 p-[0.7rem] m-3 text-white font-bold rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && <span className="mx-auto text-white">Forgot password?</span>}
        <div className="my-10 flex">
          <span className="text-zinc-400 mx-1"> {isSignInForm ? "New to netflix?" : "Already have an account?"}</span>
          <span className="text-white mx-1 cursor-pointer" onClick={handleToggleSignUpSignIn}>{isSignInForm ? "SignUp now!" : "SignIn now!"}</span>
        </div>
        <span className="text-zinc-500 text-right mx-4">
          Copy rights @netflix-gpt
        </span>
      </form>
    </div>
  );
};

export default Login;
