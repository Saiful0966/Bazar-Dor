
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);

  // Profile Name Update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name: name,
      });
      // ✅ Success Notification
      toast.success("প্রোফাইল নাম সফলভাবে আপডেট করা হয়েছে!");
    } catch (error) {
      console.error("Update failed:", error);
      // ❌ Error Notification
      toast.error("নাম আপডেট করতে সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  //Signout
  const handleSignout = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-[#00a859]"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-gray-600">আপনি লগইন অবস্থায় নেই।</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Hader section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">আমার প্রোফাইল</h1>
          <p className="text-sm text-gray-500 mt-1">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখতে ও আপডেট করতে পারবেন।
          </p>
        </div>

        {/* user Info and signout */}
        <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200 shrink-0">
              <Image
                src={user?.image || "/profie-picture.jpg"}
                alt={user?.name || "User Avatar"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {user?.name}
              </h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignout}
            className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors cursor-pointer self-end sm:self-center"
          >
            <LogOut className="w-4 h-4" />
            <span>সাইন আউট</span>
          </button>
        </div>
        

        {/* Name Update form */}
        <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-4">তথ্য</h3>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                নাম
              </label>
              <input
                type="text"
                defaultValue={user?.name || ""}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-800 text-sm bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00a859] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00a859] hover:bg-[#008f4c] text-white font-medium rounded-lg text-sm transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
            >
              {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;