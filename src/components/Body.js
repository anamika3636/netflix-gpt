import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom'
import Header from './Header'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/fiberBase";
import { useDispatch} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
]);
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName, photoURL}= user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
  } else {
    // User is signed out
    dispatch(removeUser());
    
  }
});
}, []);
  return (
    <div>
    {/* <Header/> */}
    <RouterProvider router={appRouter}/>
     </div>
  )
}

export default Body