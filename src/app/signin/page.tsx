
"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const SigninPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setToastMessage(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        setLoading(false);

        if (data) {
            setToastMessage({ text: "সাইন ইন সফল হয়েছে", type: "success" });
            setTimeout(() => {
                router.push("/");
            }, 1500);
        }

        if (error) {
            setToastMessage({ text: error.message || "ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।", type: "error" });
        }
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
        <div className="flex justify-center items-center min-h-[80vh] px-4 relative">
            {/* Toast Notification Section */}
            {toastMessage && (
                <div className="fixed top-5 right-5 z-50">
                    <div className={`px-4 py-3 rounded-lg shadow-lg text-white font-medium transition-all ${
                        toastMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                        {toastMessage.text}
                    </div>
                </div>
            )}

            <form onSubmit={onSubmit} className="w-full max-w-md">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-sm">
                    {/* Header Section */}
                    <div className="text-center mb-4">
                        <legend className="fieldset-legend text-2xl font-bold mb-1">সাইন ইন</legend>
                        <p className="text-sm text-gray-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                    </div>

                    {/* Email Input */}
                    <label className="label text-sm font-medium">ইমেইল</label>
                    <input 
                        type="email" 
                        name="email"
                        className="input w-full" 
                        placeholder="Your Email" 
                        required
                    />

                    {/* Password Input  */}
                    <label className="label text-sm font-medium mt-3">পাসওয়ার্ড</label>
                    <div className="relative w-full">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password"
                            className="input w-full pr-10" 
                            placeholder="password" 
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                // Hide Password Icon
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                // Show Password Icon 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.573 16.49 16.638 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Login Button */}
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="btn btn-success text-white w-full mt-6"
                    >
                        {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                    </button>

                    {/* Divider */}
                    <div className="divider my-4 text-xs text-gray-400">অথবা</div>

                    {/* Social Logins */}
                    <div className="flex gap-3">
                        <button onClick={handelGoogleSignIn}  type="button" className="btn btn-outline w-1/2 bg-white">
                            Google দিয়ে চালিয়ে যান
                        </button>
                        <button onClick={handelgithubSignIn} type="button" className="btn btn-outline w-1/2 bg-white">
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    {/* Footer Links */}
                    <div className="text-center mt-5 text-sm">
                        <span className="text-gray-500">অ্যাকাউন্ট নেই? </span>
                        <Link href="/signup" className="text-success font-semibold hover:underline">
                            সাইন আপ করুন
                        </Link>
                    </div>

                    <div className="text-center mt-3">
                        <Link href="/" className="text-xs text-gray-400 hover:underline">
                            ← হোম পেজে ফিরে যান
                        </Link>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SigninPage;