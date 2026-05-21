"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const Fdata = Object.fromEntries(formData.entries());

    if (Fdata.password.length < 6) {
      toast.error("Password Must be 6 Character");
    } else {
        const {email,password} = Fdata
      const { data, error } = await authClient.signIn.email(
        {
          /**
           * The user email
           */
          email,
          /**
           * The user password
           */
          password,
          /**
           * A URL to redirect to after the user verifies their email (optional)
           */
          callbackURL: "/",
          /**
           * remember the user session after the browser is closed.
           
           */
          
        },
        {
          onRequest: (ctx) => {
            setLoading(true)
            
        },
        onError: (ctx) => {
            // display the error message
            setLoading(false);
            toast.error(ctx.error.message)
        },
        },
      );
    }
  };

  return (
    <div className=" flex items-center container-div flex-col mt-20 md:mt-40 justify-center px-4">
      {/* Logo */}
      <div className="mx-auto flex items-center mb-5 gap-2">
        <img src="/logo.png" className="w-10 h-10" alt="logo" />
        <h2 className="text-xl font-bold">PawNest</h2>
      </div>

      <form
        className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-lg"
        onSubmit={handleSignIn}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full h-10 flex items-center justify-center gap bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            
         {loading ? <Spinner />:"Login"}
          
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition">
          <FcGoogle size={24} />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-black font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
