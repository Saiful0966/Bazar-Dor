

import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import ProductSection from "@/components/productSection";
import AllProducts from "@/components/AllProducts";
import { Product } from "@/types/product";

export default async function HomePage() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <Marquee />
      <Hero />

      {/* Section আজ দাম বেড়েছে & আজ দাম কমেছে */}
      <ProductSection products={products} />

      {/* Section সব পণ্য */}
      <AllProducts products={products} />
    </main>
  );
}