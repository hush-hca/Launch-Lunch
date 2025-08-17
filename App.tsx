
import React, { useState, useCallback } from 'react';
import { User } from './types';
import { MOCK_USER } from './constants';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainPage from './pages/MainPage';
import RankingPage from './pages/RankingPage';
import MyPage from './pages/MyPage';
import AboutModal from './components/AboutModal';

type Page = 'ranking' | 'main' | 'my';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [user, setUser] = useState<User | null>(null);
  const [isAboutVisible, setAboutVisible] = useState(false);

  const handleWalletConnect = useCallback(() => {
    if (user) {
      setUser(null);
    } else {
      setUser(MOCK_USER);
    }
  }, [user]);

  const renderPage = () => {
    switch (currentPage) {
      case 'ranking':
        return <RankingPage />;
      case 'my':
        return <MyPage user={user} />;
      case 'main':
      default:
        return <MainPage user={user} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg flex flex-col">
      <Header 
        user={user}
        onAboutClick={() => setAboutVisible(true)} 
        onWalletClick={handleWalletConnect}
      />
      <main className="flex-grow pt-16 pb-20">
        {renderPage()}
      </main>
      <BottomNav 
        activePage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      {isAboutVisible && <AboutModal onClose={() => setAboutVisible(false)} />}
    </div>
  );
};

export default App;
