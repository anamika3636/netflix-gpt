import React from "react";
import { auth } from "../utils/fiberBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const nav = useNavigate();
  const user= useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        nav("/browse")
      })
      .catch((error) => {
        nav("/error")
      });
  };
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
     <div className="p-1">
        <img
          className="w-8 h-8"
          alt="img"
          src= {user?.photoUrl}
        ></img>
        <button onClick={handleSignOut} className="font-bold">
          sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
