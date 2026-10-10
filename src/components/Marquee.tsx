
import React from 'react';

interface Product {
  id: number;
  nameBn: string;
  today: number;
  unit: string;
  image?: string;
  change?: {
    dir: 'up' | 'down';
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products", {
    cache: 'no-store' 
  });
  const data: Product[] = await res.json();

  return (
    <div className="w-full overflow-hidden bg-white border-y border-gray-100 py-2.5 my-4">
     
      <div className="flex whitespace-nowrap animate-marquee">
        {[...data, ...data].map((item, index) => {
          const isUp = item.change?.dir === 'up';
          return (
            <div
              key={`${item.id}-${index}`}
              className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-gray-700"
            >
              {/* image  */}
              {item.image && (
                <span className="text-base">{item.image}</span>
              )}

              {/* Name */}
              <span className="font-semibold text-gray-900">{item.nameBn}</span>

              {/* today unit */}
              <span>
                {item.today} টাকা/{item.unit === 'kg' ? 'কেজি' : item.unit}
              </span>

              {/* change & Percentage */}
              {item.change && (
                <span
                  className={`inline-flex items-center text-xs font-semibold px-1.5 py-0.5 rounded ${
                    isUp ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                  }`}
                >
                  {isUp ? '▲' : '▼'} {item.change.pct}%
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;