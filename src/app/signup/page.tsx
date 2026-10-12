

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";

const SignupPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      setErrorMessage("❌ পাসওয়ার্ড দুটি মিলছে না");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
      callbackURL: "/signin",
    });

    setLoading(false);

    if (data) {
      router.push("/signin");
    }

   if (error) {
    if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
    setErrorMessage("❌ এই ইমেইল দিয়ে ইতোমধ্যে অ্যাকাউন্ট আছে");
    } }
  };
    
  // social link 
  
      const handelGoogleSignIn = async () => {
          await authClient.signIn.social({
          provider: "google",
      });
      };

       const handelgithubSignIn = async () => {
              await authClient.signIn.social({
              provider: "github",
          });
          };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4 py-8">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-sm">

          <div className="text-center mb-4">
            <legend className="fieldset-legend text-2xl font-bold mb-1">
              অ্যাকাউন্ট তৈরি করুন
            </legend>

            <p className="text-sm text-gray-500">
              বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
            </p>
          </div>

          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Your Full Name"
            required
          />

          <label className="label mt-3">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Your Email"
            required
          />

          {/* Password */}

          <label className="label mt-3">পাসওয়ার্ড</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-12"
              placeholder="Password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Confirm Password */}

          <label className="label mt-3">পাসওয়ার্ড নিশ্চিত করুন</label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="input input-bordered w-full pr-12"
              placeholder="Confirm Password"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="btn btn-success text-white w-full mt-6"
            disabled={loading}
          >
            {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে...": "অ্যাকাউন্ট তৈরি "}
          </button>

          <div className="divider my-4 text-xs text-gray-400">
            অথবা
          </div>

          <div className="flex gap-3">
            <button onClick={handelGoogleSignIn}
              type="button"
              className="btn btn-outline w-1/2 bg-white"
            >
              Google দিয়ে চালিয়ে যান
            </button>

            <button onClick={ handelgithubSignIn}
              type="button"
              className="btn btn-outline w-1/2 bg-white"
            >
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <div className="text-center mt-5 text-sm">
            <span className="text-gray-500">
              অ্যাকাউন্ট আছে?
            </span>{" "}
            <Link
              href="/signin"
              className="text-success font-semibold hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </div>

          <div className="text-center mt-3">
            <Link
              href="/"
              className="text-xs text-gray-400 hover:underline"
            >
              ← হোম পেজে ফিরে যান
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignupPage;