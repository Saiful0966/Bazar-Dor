// // import Image from "next/image";
// import Marquee from "@/components/Marquee";
// import Hero from '@/components/Hero';
// // import ProductCard from "@/components/ProductCard";

// export default function Home() {
//   return (
//     <div>
//       <Marquee/>
//       <Hero />
//       {/* <ProductCard/> */}
  
//     </div>
//   );
// }











// // import Image from "next/image";
// import Marquee from "@/components/Marquee";
// import Hero from '@/components/Hero';
// // import ProductCard from "@/components/ProductCard";

// export default async function Home() {
//   const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
//   const data = await res.json()
//   const sections = data.data 
//   const Products = sections[0]
//   console.log(Products)
//   return (
//     <div>
//       <Marquee/>
//       <Hero />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6">

//            {/* আজ দাম বেড়েছে ▲ */}
//            <div className="bg-red-500">
//             আজ দাম বেড়েছে ▲

//            </div>


//            {/* আজ দাম কমেছে ▼ */}
//            <div>
//             আজ দাম কমেছে ▼
//            </div>

//       </div>
      
  
//     </div>
//   );
// }










            {/* Section 1 — আজ দাম বেড়েছে ▲ */}
      
            {/* Section 2 — আজ দাম কমেছে ▼ */}
            
             
            

         
    





// import Marquee from "@/components/Marquee";
// import Hero from "@/components/Hero";
// import ProductCard from "@/components/ProductCard";
// import { Product } from "@/types/product";

// async function getProducts(): Promise<Product[]> {
//   try {
//     const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products", {
//       cache: "no-store",
//     });
    
//     if (!res.ok) {
//       return [];
//     }

//     const data = await res.json();

//     if (Array.isArray(data)) {
//       return data;
//     } else if (data && Array.isArray(data.data)) {
//       return data.data;
//     } else if (data && Array.isArray(data.products)) {
//       return data.products;
//     }

//     return [];
//   } catch (error) {
//     return [];
//   }
// }

// export default async function HomePage() {
//   const products = await getProducts();

//   if (!products || products.length === 0) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-[60vh] space-y-2">
//         <p className="text-red-500 font-semibold text-lg">ডেটা লোড করতে সমস্যা হচ্ছে!</p>
//         <p className="text-gray-500 text-sm">দয়া করে আপনার লোকাল সার্ভার টার্মিনাল চেক করুন।</p>
//       </div>
//     );
//   }

//   const priceIncreased = products
//     .filter((p) => p.change && p.change.dir === "up")
//     .slice(0, 6);

//   const priceDecreased = products
//     .filter((p) => p.change && p.change.dir === "down")
//     .slice(0, 6);

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      
//       {/* Marquee Section */}
//       <Marquee />

//       {/* Hero Section */}
//       <Hero />

//       {/* Section A — আজ দাম বেড়েছে */}
//       <section className="bg-red-50/20 p-6 rounded-2xl border border-red-100">
//         <h2 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
//           ▲ আজ দাম বেড়েছে
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {priceIncreased.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* Section B — আজ দাম কমেছে */}
//       <section className="bg-green-50/20 p-6 rounded-2xl border border-green-100">
//         <h2 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
//           ▼ আজ দাম কমেছে
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {priceDecreased.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* Section C — সব পণ্য */}
//       <section className="bg-gray-50/30 p-6 rounded-2xl border border-gray-200">
//         <h2 className="text-lg font-bold text-gray-800 mb-1">সব পণ্য</h2>
//         <p className="text-xs text-gray-500 mb-6">মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>
//       {/* <Marquee/>

//       <Hero/> */}

//     </main>
//   );
// }


















// import Hero from "@/components/Hero";
// import Marquee from "@/components/Marquee";
// import ProductSection from "@/components/ProductSection";
// import AllProducts from "@/components/AllProducts";

// async function getProducts() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/bazardor/products",
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   return res.json();
// }

// export default async function HomePage() {
//   const products = await getProducts();

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">

//       <Marquee />

//       <Hero />

//       <ProductSection products={products} />

//       <AllProducts products={products} />

//     </main>
//   );
// }

















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