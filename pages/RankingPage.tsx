
import React from 'react';
import { WEEKLY_RANKING } from '../constants';
import { Rank } from '../types';

const RankItem: React.FC<{ rankData: Rank }> = ({ rankData }) => {
  const { rank, user, score } = rankData;

  let bgColor = 'bg-white';
  if (rank === 1) bgColor = 'bg-yellow-100';
  if (rank === 2) bgColor = 'bg-gray-200';
  if (rank === 3) bgColor = 'bg-orange-200';


  return (
    <li className={`flex items-center p-3 rounded-lg shadow-sm ${bgColor}`}>
      <div className="w-10 text-center font-bold text-lg text-gray-700">#{rank}</div>
      <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mx-4" />
      <div className="flex-grow font-semibold text-gray-800">{user.name}</div>
      <div className="font-bold text-lg text-gray-900">{score}</div>
    </li>
  );
};


const RankingPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold text-center my-4 text-gray-800">Weekly Popular Lunch</h1>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-2 text-gray-700">Leaderboard</h2>
        <div className="flex justify-between items-center text-sm text-gray-500 font-semibold px-3 mb-3">
          <span>Ranks</span>
          <span>Score</span>
        </div>
        <ul className="space-y-3">
          {WEEKLY_RANKING.map(rank => (
            <RankItem key={rank.rank} rankData={rank} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RankingPage;
