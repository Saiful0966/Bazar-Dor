

import { Product } from "@/types/product";
import Card from "@/components/Card";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`,
    { cache: "no-store" }
  );

  const products: Product[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/*  Banner */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-3xl">
          {products[0]?.categoryIcon || "📦"}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 capitalize">
            {products[0]?.categoryNameBn || category}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Count and Sort Bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          মোট <span className="font-semibold text-gray-900">{products.length}</span>টি পণ্য দেখানো হচ্ছে
        </p>
       
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}