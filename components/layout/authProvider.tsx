"use client";

import LoginPage from "@/app/login/page";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToken(storedToken);
    setLoading(false);
  }, []);

  const handleLogin = () => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); // update state after login
  };

  if (loading) return null;
  //manual protected route handle
  // return token ? <>{children}</> : <LoginPage onLogin={handleLogin} />;
  return token ? <>{children}</> : <LoginPage />;
};

export default AuthProvider;
