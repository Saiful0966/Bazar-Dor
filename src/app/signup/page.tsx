import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4 py-8">
            <form className="w-full max-w-md">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6 shadow-sm">
                    {/* Header Section */}
                    <div className="text-center mb-4">
                        <legend className="fieldset-legend text-2xl font-bold mb-1">অ্যাকাউন্ট তৈরি করুন</legend>
                        <p className="text-sm text-gray-500">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                    </div>

                    {/* Name Input */}
                    <label className="label text-sm font-medium">নাম</label>
                    <input 
                        type="text" 
                        className="input w-full" 
                        placeholder="Your Full Name" 
                    />

                    {/* Email Input */}
                    <label className="label text-sm font-medium mt-3">ইমেইল</label>
                    <input 
                        type="email" 
                        className="input w-full" 
                        placeholder="Your Email" 
                    />

                    {/* Password Input */}
                    <label className="label text-sm font-medium mt-3">পাসওয়ার্ড</label>
                    <input 
                        type="password" 
                        className="input w-full" 
                        placeholder="password" 
                    />

                    {/* Confirm Password Input */}
                    <label className="label text-sm font-medium mt-3">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input 
                        type="password" 
                        className="input w-full" 
                        placeholder=" Confirm password" 
                    />

                    {/* Submit Button */}
                    <button className="btn btn-success text-white w-full mt-6">অ্যাকাউন্ট তৈরি করুন</button>

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
                        <span className="text-gray-500">অ্যাকাউন্ট আছে? </span>
                        <Link href="/signin" className="text-success font-semibold hover:underline">
                            সাইন ইন করুন
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

export default SignupPage;