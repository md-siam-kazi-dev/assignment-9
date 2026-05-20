"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorPass, setErrorPass] = useState("");
  const [loading, setLoading] = useState(false);

  // valideate password func
  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasLength = password.length >= 6;

    return hasUpper && hasLower && hasNumber && hasLength;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const Fdata = Object.fromEntries(formData.entries());

    if (!validatePassword(Fdata.password)) {
      setErrorPass(
        "Password must include uppercase, lowercase, number, and be 6+ character",
      );
    } else if (Fdata.password != Fdata.confirmpassword) {
      setErrorPass("Password must be same");
    } else {
      const { email, password, name, image } = Fdata;
      setErrorPass("");

      const { data, error } = await authClient.signUp.email(
        {
          email, // user email address
          password, // user password -> min 8 characters by default
          name, // user display name
          image, // User image URL (optional)
          callbackURL: "/",
          rememberMe: true, // A URL to redirect to after the user verifies their email (optional)
        },
        {
          onSuccess: (ctx) => {
            toast.success("Sign Up Successfully");
            redirect("/");
            
          },
          onError: (ctx) => {
            setLoading(false);
            toast.error(ctx.error.message);
          },
          onResponse: (ctx) => {
            setLoading(true);
          },
        },
      );
      console.log(data, error);
    }
  };
  return (
    <div className="min-h-screen mt-20 md:mt-30 container-div flex-col flex items-center justify-center px-4">
      {/* Logo */}
      <div className="mx-auto flex items-center mb-5 gap-2">
        <img src="/logo.png" className="w-10 h-10" alt="logo" />
        <h2 className="text-xl font-bold">PawNest</h2>
      </div>

      <form
        className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-lg"
        onSubmit={handleSignUp}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

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

        {/* Photo URL */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Photo URL</label>
          <input
            type="text"
            name="image"
            required
            placeholder="Enter photo URL"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Password</label>

          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              name="password"
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Confirm Password</label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmpassword"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        {errorPass.length != 0 && (
          <div className="mt-3 mb-3 border p-4 rounded">
            <p className="font-semibold text-red-500">{errorPass}</p>
          </div>
        )}

        {/* Sign Up Button */}
        <button className="w-full flex items-center justify-center bg-black h-10 text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
          {loading ? <Spinner /> : "Sign Up"}
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

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
