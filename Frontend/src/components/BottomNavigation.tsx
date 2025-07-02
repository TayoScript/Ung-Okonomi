
import { Home, Brain, Target, BarChart3, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Hjem', path: '/' },
    { id: 'ai', icon: Brain, label: 'AI', path: '/ai' },
    { id: 'goals', icon: Target, label: 'Mål', path: '/goals' },
    { id: 'stats', icon: BarChart3, label: 'Statistikk', path: '/stats' },
    { id: 'profile', icon: User, label: 'Profil', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-primary bg-primary/10 scale-105' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon size={24} className="mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
