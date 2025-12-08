import React from 'react';
import { Deck } from './components/Deck';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-100 bg-black min-h-screen">
      <Deck />
    </div>
  );
};

export default App;