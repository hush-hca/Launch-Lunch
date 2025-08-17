
export interface FoodItem {
  id: number;
  name: string;
  image: string;
  recommender: string;
  postUrl: string;
  country: string; // e.g., 'KR', 'JP', 'US', 'IT'
  icon: string; // emoji or image url for the wheel
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  points: number;
  walletAddress: string;
}

export interface Rank {
  rank: number;
  user: User;
  score: number;
}
