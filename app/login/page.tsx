"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // router.push("/");

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: email, // using email state
          password: password, // using password state
          expiresInMins: 30,
        }),
      });

      const data = await res.json();
      console.log("Login Result:", data);

      if (data?.token) {
        // Save token in localStorage (or cookies)
        localStorage.setItem("authToken", data.token);

        // Redirect to dashboard
        router.push("/");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Please sign in to your account
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-red-600" />
                <label className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-600 hover:text-red-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 rounded-lg text-white bg-red-600 hover:bg-red-700"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <a href="#" className="font-medium text-red-600 hover:text-red-700">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
