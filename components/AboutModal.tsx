
import React from 'react';
import { CloseIcon } from './Icons';

interface AboutModalProps {
    onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0047AB] text-white rounded-xl shadow-lg w-full max-w-sm mx-auto animate-fade-in-up">
                <div className="p-6 border-b border-white/20 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">About LaunchLunch (Beta)</h2>
                    <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-1">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">How to use:</h3>
                    <ol className="list-decimal list-inside space-y-3 text-white/90">
                        <li>Foods from the tagged food channel are added to the roulette.</li>
                        <li>Virtual Points (Not real tokens) - You get points when your food is recommended.</li>
                        <li>Roulette Spin: 2 free spins per day, more requires Luntzy tokens.</li>
                        <li>NFT: User custom shapes (Coming soon!).</li>
                        <li>Acquisition Method: Purchase virtual points / earn with Luntzy coin (Coming soon!).</li>
                    </ol>
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

export default AboutModal;
