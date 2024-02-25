import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({ isBrowse }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const authEvent = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          addUser({
            displayName: user.displayName,
            email: user.email,
            accessToken: user.accessToken,
            uid: user.uid,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authEvent();
  }, []);

  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black z-10 absolute top-0 w-[100%] flex justify-between">
      <img
        className="w-48 mx-20"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {isBrowse && (
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-evenly mx-2 py-1">
            <img
              className="w-10 h-10 mx-4"
              src={USER_LOGO}
            />
            <span className="text-white text-lg">{user?.displayName}</span>
          </div>
          <button
            className="m-2 text-white text-lg p-2"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
