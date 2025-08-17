
import React from 'react';
import { User, FoodItem } from '../types';
import { MOCK_USER_LUNCHES } from '../constants';
import { ExternalLinkIcon } from '../components/Icons';

interface MyPageProps {
  user: User | null;
}

const MyPage: React.FC<MyPageProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-700">My Page</h1>
        <p className="text-gray-500 mt-4">Please connect your wallet to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mt-4">
        <div className="relative">
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
          <div className="absolute -bottom-2 -right-2 bg-[#0047AB] text-white text-xs font-bold rounded-full px-2 py-1">내 프사</div>
        </div>
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <div className="flex items-center space-x-4 mt-2">
          <div className="bg-black text-white text-sm font-semibold rounded-full px-4 py-1.5 flex items-center space-x-1">
            <span>♾️</span>
            <span>{user.points} point</span>
          </div>
          <div className="bg-black text-white text-sm font-semibold rounded-full px-4 py-1.5 flex items-center space-x-1">
             <span>✪</span>
            <span>{MOCK_USER_LUNCHES.length} launched</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">My Lunch</h3>
        <ul className="space-y-4">
          {MOCK_USER_LUNCHES.map((item) => (
            <li key={item.id} className="bg-white p-3 rounded-lg shadow-sm flex items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h4 className="font-bold text-lg">{item.name}</h4>
                <a 
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center"
                >
                  View Post <ExternalLinkIcon className="w-4 h-4 ml-1" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyPage;
