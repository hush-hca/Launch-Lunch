
import React from 'react';
import { User } from '../types';
import { WalletIcon } from './Icons';

interface HeaderProps {
  user: User | null;
  onAboutClick: () => void;
  onWalletClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onAboutClick, onWalletClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-md mx-auto bg-[#0047AB] text-white p-4 flex justify-between items-center z-50 h-16">
      <div className="font-extrabold text-2xl tracking-tighter">
        LAUNCH<span className="bg-white text-[#0047AB] rounded-sm px-1">LUNCH</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onAboutClick} className="font-bold text-lg">About</button>
        <button 
          onClick={onWalletClick}
          className="border border-white rounded-md px-3 py-1.5 text-sm font-semibold flex items-center space-x-2 hover:bg-white/10 transition-colors"
        >
          <WalletIcon className="w-4 h-4" />
          <span>{user ? `${user.walletAddress.substring(0, 6)}...` : 'Connect'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
