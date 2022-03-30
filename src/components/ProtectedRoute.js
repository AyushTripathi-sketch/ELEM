import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Spinner from "./Spinner";

const ProtectedRoute = ({children}) => {

  const {user} = useUserAuth();
  console.log(user);
  if(user === 'loading') return <Spinner />;
  if(user) return children;
  return <Navigate to="/login" />;
};

export default ProtectedRoute;