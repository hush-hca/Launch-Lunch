
import React, { useState, useEffect, useCallback } from 'react';
import Roulette from '../components/Roulette';
import ResultModal from '../components/ResultModal';
import { FOOD_ITEMS } from '../constants';
import { FoodItem, User } from '../types';

interface MainPageProps {
  user: User | null;
}

const MainPage: React.FC<MainPageProps> = ({ user }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<FoodItem | null>(null);
  const [freeSpins, setFreeSpins] = useState(2);
  const [luntzyBalance, setLuntzyBalance] = useState(user ? user.points : 50);

  useEffect(() => {
    if (user) {
        setLuntzyBalance(user.points);
    }
  }, [user]);

  const handleSpin = useCallback((isFree: boolean) => {
    if (isSpinning) return;
    if (isFree && freeSpins <= 0) {
      alert("No more free spins for today!");
      return;
    }
    if (!isFree && luntzyBalance < 10) {
      alert("Not enough Luntzy!");
      return;
    }
    if (!user) {
      alert("Please connect your wallet to spin!");
      return;
    }

    if (isFree) {
      setFreeSpins(prev => prev - 1);
    } else {
      setLuntzyBalance(prev => prev - 10);
    }

    setIsSpinning(true);
    const newRotation = rotation + 360 * 5 + Math.random() * 360;
    const numItems = FOOD_ITEMS.length;
    const anglePerItem = 360 / numItems;
    const winningIndex = Math.floor(((360 - (newRotation % 360)) + (anglePerItem / 2)) % 360 / anglePerItem);
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(FOOD_ITEMS[winningIndex]);
    }, 5000); // Must match CSS transition duration
  }, [isSpinning, freeSpins, luntzyBalance, rotation, user]);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mt-4">What's for lunch today?</h1>
      <p className="text-gray-500 text-center mb-4">Spin the wheel and discover your perfect meal!</p>
      
      <Roulette items={FOOD_ITEMS} isSpinning={isSpinning} rotation={rotation} />

      <div className="w-full max-w-xs space-y-3 mt-4">
        <button 
          onClick={() => handleSpin(true)}
          disabled={isSpinning || freeSpins <= 0 || !user}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg shadow-md disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-600 transition-all"
        >
          Free Spin ({freeSpins}/2)
        </button>
        <button 
          onClick={() => handleSpin(false)}
          disabled={isSpinning || luntzyBalance < 10 || !user}
          className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md disabled:bg-orange-300 disabled:cursor-not-allowed hover:bg-orange-600 transition-all"
        >
          Spin (10 Luntzy)
        </button>
      </div>

      {result && <ResultModal item={result} onClose={() => setResult(null)} />}
    </div>
  );
};

export default MainPage;
