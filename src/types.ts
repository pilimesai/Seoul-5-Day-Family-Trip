export interface ItinerarySection {
  time: string;
  text: string;
  transport?: 'taxi' | 'subway' | 'bus' | 'walk';
  transportTip?: string;
}

export interface DayData {
  day: number;
  title: string;
  highlights: string;
  sections: ItinerarySection[];
}

export interface MapLocation {
  name: string;
  q: string;
  naverQ?: string;
}

export interface MapGroup {
  day: string;
  locations: MapLocation[];
}

export interface FoodItem {
  name: string;
  desc: string;
  tag: string;
}

export interface ShoppingItem {
  name: string;
  nameKr?: string;
  loc: string;
  desc: string;
  code?: string;
  image?: string;
  recommender?: string;
}

export interface CouponItem {
  title: string;
  subtitle?: string;
  desc: string;
  code?: string;
  barcode?: string;
  image?: string;
  validity?: string;
  brand: string;
  color?: string;
}
