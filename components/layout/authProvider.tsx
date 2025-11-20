"use client";
import Login from "@/app/login/page";
import React, { useState } from "react";
interface props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: props) => {
  //   const [token, setToken] = useState(false);

  //   Client-Side Protection (route)
  //   if (!token) {
  //     return (
  //       <div>
  //         <Login />
  //       </div>
  //     );
  //   }
  return <div>{children}</div>;
};

export default AuthProvider;
