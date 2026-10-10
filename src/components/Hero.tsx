'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  // Date
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-6">
      {/* Container  */}
      <div className="bg-[#f2f7f4] rounded-[24px] p-6 md:p-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Left Content  */}
        <div className="flex-1 text-left">
          
          {/*  Date  */}
          <span className="inline-block bg-[#00a859]/10 text-[#00a859] text-xs md:text-sm font-medium px-3 py-1 rounded-full mb-3">
            {currentDate}
          </span>

          {/*  Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111827] leading-tight mb-3">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/*  Description */}
          <p className="text-[#4b5563] text-sm md:text-base leading-relaxed max-w-xl mb-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <div>
            <Link
              href="#all-products"
              className="inline-block bg-[#00a859] hover:bg-[#008f4c] text-white font-medium text-sm md:text-base px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              সব পণ্য দেখুন
            </Link>
          </div>

        </div>

        {/* Right Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px]">
          <Image
            src="/bazar-hero.png"
            alt="today Bazar Price"
            width={400}
            height={300}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;












// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// const Hero = () => {
//   // Dynamic date in Bangla
//   const currentDate = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 my-4">
//       {/* Container - items-start use kora hoyeche jate text block opore thake */}
//       <div className="bg-[#f2f7f4] rounded-[24px] p-5 sm:p-6 md:p-8 flex flex-col-reverse md:flex-row items-start justify-between gap-6 md:gap-8">
        
//         {/* Left Content Column - Top aligned */}
//         <div className="flex-1 text-left pt-1">
          
//           {/* 1. Date Badge */}
//           <span className="inline-block bg-[#00a859]/10 text-[#00a859] text-xs md:text-sm font-medium px-3 py-1 rounded-full mb-2">
//             {currentDate}
//           </span>

//           {/* 2. Heading */}
//           <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111827] leading-tight mb-2">
//             আজকের বাজারের দাম এক নজরে
//           </h1>

//           {/* 3. Description */}
//           <p className="text-[#4b5563] text-sm md:text-base leading-relaxed max-w-xl mb-5">
//             চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
//           </p>

//           {/* 4. Action Button */}
//           <div>
//             <Link
//               href="#all-products"
//               className="inline-block bg-[#00a859] hover:bg-[#008f4c] text-white font-medium text-sm md:text-base px-5 py-2.5 rounded-lg transition-colors duration-200"
//             >
//               সব পণ্য দেখুন
//             </Link>
//           </div>

//         </div>

//         {/* Right Hero Image */}
//         <div className="flex-1 flex justify-center md:justify-end w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] self-center md:self-start">
//           <Image
//             src="/bazar-hero.png"
//             alt="আজকের বাজারের দাম"
//             width={400}
//             height={300}
//             className="w-full h-auto object-contain"
//             priority
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;