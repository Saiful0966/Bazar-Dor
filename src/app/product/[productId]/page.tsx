

import { Product } from "@/types/product";
import Link from "next/link";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

interface MarketData {
  market: string;
  division: string;
  min: number;
  max: number;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { productId } = await params;

  let products: Product[] = [];
  
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      { cache: "no-store" }
    );
    const jsonResponse = await res.json();
    products = Array.isArray(jsonResponse) ? jsonResponse : jsonResponse.data || [];
  } catch (error) {
    console.error("API Fetch Error:", error);
  }

  const foundProduct = products.find(
    (p: Product) => p.id.toString() === productId || p.slug === productId
  );

  if (!foundProduct) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center text-red-500 font-semibold text-lg">
        পণ্যটি পাওয়া যায়নি
      </div>
    );
  }

  const markets: MarketData[] = (foundProduct as Product & { markets?: MarketData[] }).markets || [];
  
  const minPrice = markets.length
    ? Math.min(...markets.map((m) => m.min))
    : foundProduct.today;
  const maxPrice = markets.length
    ? Math.max(...markets.map((m) => m.max))
    : foundProduct.today;
  const avgPrice = markets.length
    ? Math.round(
        markets.reduce((acc, m) => acc + (m.min + m.max) / 2, 0) / markets.length
      )
    : foundProduct.today;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Home navlink */}
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <Link href="/" className="hover:underline">হোম</Link>
        <span>&gt;</span>
        <span className="capitalize">{foundProduct.categoryNameBn || foundProduct.category}</span>
        <span>&gt;</span>
        <span className="text-gray-900 font-medium">{foundProduct.nameBn}</span>
      </div>

      {/* ১. product Banner */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-3xl shadow-inner">
            {foundProduct.image}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{foundProduct.nameBn}</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              প্রতি {foundProduct.unit} • {foundProduct.categoryNameBn || foundProduct.category}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              গতকালকের তুলনায় আজ দাম {foundProduct.today >= foundProduct.yesterday ? "বেড়েছে" : "কমেছে"}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-right min-w-[150px] border border-gray-100">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <div className="text-2xl font-bold text-gray-900 mt-0.5">
            {foundProduct.today} <span className="text-sm font-normal">টাকা</span>
          </div>
          <div className="mt-1">
            {foundProduct.change.dir === "up" && (
              <span className="text-xs text-red-600 font-semibold bg-red-50 px-2.5 py-0.5 rounded-full inline-block">
                ▲ {foundProduct.change.pct}%
              </span>
            )}
            {foundProduct.change.dir === "down" && (
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                ▼ {foundProduct.change.pct}%
              </span>
            )}
            {foundProduct.change.dir === "flat" && (
              <span className="text-xs text-gray-600 font-semibold bg-gray-100 px-2.5 py-0.5 rounded-full inline-block">
                — {foundProduct.change.pct}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3 Price card */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-3">দামের সারসংক্ষেপ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{minPrice} টাকা</p>
            <p className="text-xs text-gray-400 mt-1">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
            <p className="text-2xl font-bold text-red-600 mt-1">{maxPrice} টাকা</p>
            <p className="text-xs text-gray-400 mt-1">সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500">গড় দাম</p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">{avgPrice} টাকা</p>
            <p className="text-xs text-gray-400 mt-1">প্রতি {foundProduct.unit} এর হিসাবে</p>
          </div>
        </div>
      </div>

      {/* ৩. today price table */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-3">বাজারভিত্তিক আজকের দাম</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 font-medium">
                <th className="p-4">বাজার</th>
                <th className="p-4">বিভাগ</th>
                <th className="p-4">সর্বনিম্ন</th>
                <th className="p-4">সর্বোচ্চ</th>
                <th className="p-4">গড়</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {markets.length > 0 ? (
                markets.map((m, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">{m.market}</td>
                    <td className="p-4 text-gray-600">{m.division}</td>
                    <td className="p-4 text-gray-900">{m.min} টাকা</td>
                    <td className="p-4 text-gray-900">{m.max} টাকা</td>
                    <td className="p-4 text-gray-900 font-medium">
                      {Math.round((m.min + m.max) / 2)} টাকা
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-400">
                    বাজারের তথ্য পাওয়া যায়নি
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}