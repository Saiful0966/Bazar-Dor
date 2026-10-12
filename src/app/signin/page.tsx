
import React from 'react';
import Link from 'next/link'; 

const SigninPage = () => {
    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <form className="w-full max-w-md">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-sm">
                    {/* Header Section */}
                    <div className="text-center mb-4">
                        <legend className="fieldset-legend text-2xl font-bold mb-1">সাইন ইন</legend>
                        <p className="text-sm text-gray-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                    </div>

                    {/* Email input */}
                    <label className="label text-sm font-medium">ইমেইল</label>
                    <input 
                        type="email" 
                        className="input w-full" 
                        placeholder="Your Full Name" 
                    />

                    {/* Password Input */}
                    <label className="label text-sm font-medium mt-3">পাসওয়ার্ড</label>
                    <input 
                        type="password" 
                        className="input w-full" 
                        placeholder="password" 
                    />

                    {/* Login Button */}
                    <button className="btn btn-success text-white w-full mt-6">সাইন ইন</button>

                    {/* Divider */}
                    <div className="divider my-4 text-xs text-gray-400">অথবা</div>

                    {/* Social Logins */}
                    <div className="flex gap-3">
                        <button type="button" className="btn btn-outline w-1/2 bg-white">
                            Google দিয়ে চালিয়ে যান
                        </button>
                        <button type="button" className="btn btn-outline w-1/2 bg-white">
                            GitHub দিয়ে চালিয়ে যান
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