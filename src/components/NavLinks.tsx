
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  id?: string;
  _id?: string;
  nameBn?: string;
  slug?: string;
  icon?: string;
  image?: string;
}

const NavLinks = async () => {
  let categories: Category[] = [];

  try {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories", {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      categories = Array.isArray(data) ? data : data.data || [];
    }
  } catch (error) {
    console.error("Categories fetch error:", error);
  }

  return (
    <nav className="w-full border-t border-gray-100 py-2 sm:py-2.5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-start sm:justify-center gap-4 sm:gap-6 overflow-x-auto text-xs sm:text-sm text-gray-700 scrollbar-none [-webkit-overflow-scrolling:touch]">
        {categories.map((cat, index) => {
          const catId = cat.id || cat._id || index;
          const catName = cat.nameBn;
          const catSlug = cat.slug || catId;

          return (
            <Link
              key={catId}
              href={`/category/${catSlug}`}
              className="hover:text-emerald-600 flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors shrink-0"
            >
              {cat.icon && <span>{cat.icon}</span>}
              {cat.image && (
                <Image
                  src={cat.image}
                  alt={catName || "category"}
                  width={16}
                  height={16}
                  unoptimized
                  className="w-4 h-4 object-contain"
                />
              )}
              <span>{catName}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavLinks;