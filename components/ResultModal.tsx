
import React from 'react';
import { FoodItem } from '../types';
import { ShareIcon, ExternalLinkIcon } from './Icons';

interface ResultModalProps {
  item: FoodItem;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ item, onClose }) => {
  const getCountryFlag = (countryCode: string) => {
    return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm mx-auto p-6 text-center animate-fade-in-up">
        <p className="text-gray-600 font-medium">Perfect Dish for today is...</p>
        <h2 className="text-3xl font-bold my-2 flex items-center justify-center gap-2">
          <img src={getCountryFlag(item.country)} alt={`${item.country} flag`} className="w-6 h-auto" />
          {item.name}
        </h2>
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg my-4" />
        <div className="text-left bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700">
            It's <span className="font-bold text-[#0047AB]">{item.recommender}'s</span> recommendation!
          </p>
          <a href={item.postUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 mt-1 flex items-center hover:underline">
            can you pick my lunch? Tteokbokki or boiled pork...
            <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="flex space-x-4 mt-6">
          <button 
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => { /* Implement share logic */ }}
            className="flex-1 bg-[#0047AB] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <ShareIcon className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ResultModal;
