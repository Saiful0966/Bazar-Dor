

import Link from "next/link";
import { Product } from "@/types/product";

export default function Card({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
        {/*  image and name & unit */}
        <div className="flex items-center gap-3">
          
          <div className="w-12 h-12 rounded-full bg-gray-100/80 flex items-center justify-center text-2xl flex-shrink-0">
            {product.image}
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">
              {product.nameBn}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              প্রতি {product.unit}
            </p>
          </div>
        </div>

        {/* Dam and change & %*/}
        <div className="flex items-end justify-between mt-6">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">আজকের দাম</p>
            <h4 className="text-lg md:text-xl font-bold text-gray-900">
              {product.today} টাকা
            </h4>
          </div>

          <div>
            {product.change.dir === "up" && (
              <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-0.5">
                ▲ {product.change.pct}%
              </span>
            )}

            {product.change.dir === "down" && (
              <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-0.5">
                ▼ {product.change.pct}%
              </span>
            )}

            {product.change.dir === "flat" && (
              <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-0.5">
                — {product.change.pct}%
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}