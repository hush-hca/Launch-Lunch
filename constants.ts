
import { FoodItem, User, Rank } from './types';

// =================================================================
// ADMIN AREA: Manually add or edit food information in this list.
// - name: The name of the food.
// - image: A direct URL to a photo of the food.
// - recommender: The Farcaster username of the person who recommended it.
// - postUrl: A direct link to the Farcaster post.
// - country: A two-letter country code (e.g., 'KR', 'JP', 'US', 'IT').
// - icon: A simple emoji to represent the food on the roulette wheel.
// =================================================================
export const FOOD_ITEMS: FoodItem[] = [
  { id: 1, name: 'Boiled Pork', image: 'https://picsum.photos/seed/pork/400/300', recommender: 'SSoda', postUrl: '#', country: 'KR', icon: '🥩' },
  { id: 2, name: 'Pizza', image: 'https://picsum.photos/seed/pizza/400/300', recommender: 'dwr', postUrl: '#', country: 'IT', icon: '🍕' },
  { id: 3, name: 'Hamburger', image: 'https://picsum.photos/seed/burger/400/300', recommender: 'v', postUrl: '#', country: 'US', icon: '🍔' },
  { id: 4, name: 'Ramen', image: 'https://picsum.photos/seed/ramen/400/300', recommender: 'ace', postUrl: '#', country: 'JP', icon: '🍜' },
  { id: 5, name: 'Bibimbap', image: 'https://picsum.photos/seed/bibimbap/400/300', recommender: 'loza', postUrl: '#', country: 'KR', icon: '🍛' },
  { id: 6, name: 'Sushi', image: 'https://picsum.photos/seed/sushi/400/300', recommender: 'gami', postUrl: '#', country: 'JP', icon: '🍣' },
  { id: 7, name: 'Pasta', image: 'https://picsum.photos/seed/pasta/400/300', recommender: 'gmgm', postUrl: '#', country: 'IT', icon: '🍝' },
  { id: 8, name: 'Tacos', image: 'https://picsum.photos/seed/tacos/400/300', recommender: 'juan', postUrl: '#', country: 'MX', icon: '🌮' },
];

export const MOCK_USER: User = {
    id: 101,
    name: 'Loza Kilomanzero',
    avatar: 'https://picsum.photos/seed/loza/100',
    points: 431,
    walletAddress: '0xdf3f...a2c1'
};

export const MOCK_USER_LUNCHES: FoodItem[] = [
    FOOD_ITEMS[4], // Bibimbap
    { id: 9, name: 'MUJI Baumkuchen', image: 'https://picsum.photos/seed/baumkuchen/400/300', recommender: 'Loza Kilomanzero', postUrl: '#', country: 'JP', icon: '🍰' }
];


export const WEEKLY_RANKING: Rank[] = [
  { rank: 1, user: { id: 201, name: 'Gamgyul', avatar: 'https://picsum.photos/seed/gamgyul/100', points: 1000, walletAddress: '' }, score: 200 },
  { rank: 2, user: { id: 202, name: 'SSoda', avatar: 'https://picsum.photos/seed/ssoda/100', points: 950, walletAddress: '' }, score: 200 },
  { rank: 3, user: { id: 203, name: 'dwr', avatar: 'https://picsum.photos/seed/dwr/100', points: 900, walletAddress: '' }, score: 200 },
  { rank: 4, user: { id: 204, name: 'v', avatar: 'https://picsum.photos/seed/v/100', points: 850, walletAddress: '' }, score: 200 },
  { rank: 5, user: { id: 205, name: 'ace', avatar: 'https://picsum.photos/seed/ace/100', points: 800, walletAddress: '' }, score: 200 },
];
