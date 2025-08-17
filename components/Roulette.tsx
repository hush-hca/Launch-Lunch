
import React from 'react';
import { FoodItem } from '../types';

interface RouletteProps {
  items: FoodItem[];
  isSpinning: boolean;
  rotation: number;
}

const Roulette: React.FC<RouletteProps> = ({ items, isSpinning, rotation }) => {
  const numItems = items.length;
  const anglePerItem = 360 / numItems;

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto my-8">
      <div 
        className="absolute w-full h-full rounded-full border-8 border-pink-400"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
        }}
      >
        {items.map((item, index) => {
          const itemAngle = anglePerItem * index;
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="absolute w-1/2 h-1/2 origin-bottom-right"
              style={{
                transform: `rotate(${itemAngle}deg)`,
              }}
            >
              <div
                className={`absolute w-full h-full clip-wedge ${isEven ? 'bg-cyan-300' : 'bg-pink-200'}`}
              ></div>
              <div className="absolute w-full h-full flex items-start justify-center pt-4"
                style={{
                    transform: `rotate(${anglePerItem / 2}deg) translate(0, -10%)`,
                }}
              >
                <span className="text-3xl" style={{ transform: 'rotate(-90deg)' }}>{item.icon}</span>
              </div>
            </div>
          );
        })}
      </div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2" style={{
        width: 0,
        height: 0,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: '20px solid red',
        zIndex: 10,
      }}></div>
       <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full border-4 border-pink-500"></div>
      </div>
      <style>{`
        .clip-wedge {
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default Roulette;
