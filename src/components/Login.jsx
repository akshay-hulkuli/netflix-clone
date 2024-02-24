import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { checkValidaData } from "../utils/validate";
import Header from "./Header";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");

  const handleSubmit = () => {
    let validationMessage = checkValidaData(
      emailRef.current.value,
      passwordRef.current.value,
      !isSignInForm ? nameRef.current.value : undefined
    );
    setErrorMessage(validationMessage);
    if (validationMessage) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signin success");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Login failed, please check credentials!");
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Sign in is successful ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Email ID is already taken");
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-zinc-950 relative w-3/12 my-36 mx-auto flex flex-col justify-between right-0 left-0 rounded-md bg-opacity-90"
      >
        <span className="text-4xl font-bold text-white px-5 py-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </span>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type={"text"}
            placeholder="Full Name"
            className="p-4 m-3 bg-zinc-900 rounded-sm border-zinc-300 text-white"
          />
        )}
        <input
          type={"text"}
          placeholder="Email Address"
          className="p-4 m-3 bg-zinc-900 text-white"
          ref={emailRef}
        />
        <input
          type={"password"}
          placeholder="password"
          ref={passwordRef}
          className="p-4 m-3 bg-zinc-900 rounded-sm border-zinc-300 text-white"
        />
        <span className="text-red-700 text-lg m-3">{errorMessage}</span>
        <button
          className="bg-red-700 p-[0.7rem] m-3 text-white font-bold rounded-md"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <span className="mx-auto text-white">Forgot password?</span>
        )}
        <div className="my-10 flex">
          <span className="text-zinc-400 mx-1">
            {" "}
            {isSignInForm ? "New to netflix?" : "Already have an account?"}
          </span>
          <span
            className="text-white mx-1 cursor-pointer"
            onClick={handleToggleSignUpSignIn}
          >
            {isSignInForm ? "SignUp now!" : "SignIn now!"}
          </span>
        </div>
        <span className="text-zinc-500 text-right mx-4">
          Copy rights @netflix-gpt
        </span>
      </form>
    </div>
  );
};

export default Login;
