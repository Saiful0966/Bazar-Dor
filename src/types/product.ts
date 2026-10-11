
export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string; 
  today: number;
  yesterday: number;
  lastweek: number;
  lastmonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}