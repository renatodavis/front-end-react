import React, { ReactNode } from 'react';
import Header from './Header';

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="flex-1 p-4">
      <Header />
      {children}
    </main>
  );
};

export default MainContent;
