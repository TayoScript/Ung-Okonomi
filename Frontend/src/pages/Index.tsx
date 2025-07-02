
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import BottomNavigation from '@/components/BottomNavigation';

const Index = () => {
  return (
    <div className="relative">
      <Home />
      <BottomNavigation />
    </div>
  );
};

export default Index;
