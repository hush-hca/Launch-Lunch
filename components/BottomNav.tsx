
import React from 'react';

type Page = 'ranking' | 'main' | 'my';

interface BottomNavProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onPageChange }) => {
  const navItemClass = (page: Page) => 
    `flex-1 text-center font-bold text-lg ${activePage === page ? 'text-[#0047AB]' : 'text-gray-500'}`;

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-100 border-t border-gray-200 h-20 flex items-center justify-around z-50">
      <button onClick={() => onPageChange('ranking')} className={navItemClass('ranking')}>
        Ranking
      </button>
      <button 
        onClick={() => onPageChange('main')} 
        className="w-20 h-20 bg-white rounded-full border-4 border-gray-100 -mt-12 flex items-center justify-center shadow-lg"
        aria-label="Go to main page"
      >
        <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-3xl">
          👻
        </div>
      </button>
      <button onClick={() => onPageChange('my')} className={navItemClass('my')}>
        My
      </button>
    </footer>
  );
};

export default BottomNav;
