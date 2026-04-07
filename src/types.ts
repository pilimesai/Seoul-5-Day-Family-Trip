export interface ItinerarySection {
  time: string;
  text: string;
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
}
