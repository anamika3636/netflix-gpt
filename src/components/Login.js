import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/fiberBase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errMsg,setErrMsg]= useState(null);
  const navigate =useNavigate();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handlebutton = () => {
    //validation
    const mesg =checkValidData(email.current.value,password.current.value)
setErrMsg(mesg);
    if (mesg) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://media.istockphoto.com/id/1499401564/photo/two-lawyers-are-discussing-about-contract-paper-law-matters-determination-pointing-law-and.jpg?s=1024x1024&w=is&k=20&c=t_mxMKXwJcCEz7VYubLABt4otPKb054TruDBhw4n-zQ="
        }).then(() => {
          // Profile updated!
          navigate("/browse")
        }).catch((error) => {
          setErrMsg(errMsg.message )
          // ...
        });
        console.log(user);
        // navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message; 
        setErrMsg(errorMessage,errorCode);
      });
     

      }else{
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log(user)
     navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorMessage,errorCode);
  });


      }
    
  };
  const TogglesingIn = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 p-14 bg-black mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="name"
            placeholder="Name"
            className=" text-xl p-2 my-4 bg-gray-700 w-full rounded-xl"
          ></input>
        )}
        <input ref={email}
          type="text"
          placeholder="Email Address"
          className=" text-xl p-2 my-4 bg-gray-700 w-full rounded-xl"
        ></input>
        <input ref={password}
          type="password"
          placeholder="Password"
          className="text-xl p-2 my-4 bg-gray-700 w-full rounded-xl"
        ></input>
        <p className="text-red-500 text-xs">{errMsg}</p>
        <button
          className=" text-xl 98z p-1 my-6 bg-red-700 w-full rounded-xl"
          onClick={handlebutton}
        >
          {isSignIn ? "Sign in" : "sign Up"}
        </button>
        <p className="text-xl cursor-pointer" onClick={TogglesingIn}>
          {isSignIn ? "create new account" : "already registered? sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
