
import { Eye, EyeOff, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';

const BalanceCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const balance = 2847;
  const income = 1200;
  const expenses = 650;

  return (
    <div className="gradient-green-dark p-6 rounded-2xl border border-border/50 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground/80 mb-1">Min saldo</h2>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-foreground">
              {isVisible ? `${balance.toLocaleString('nb-NO')} kr` : '••••• kr'}
            </span>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center">
          <span className="text-xl">💰</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <TrendingUp size={16} className="text-green-400" />
          </div>
          <div>
            <p className="text-sm text-foreground/70">Inntekt</p>
            <p className="font-semibold text-green-400">+{income.toLocaleString('nb-NO')} kr</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
            <TrendingDown size={16} className="text-red-400" />
          </div>
          <div>
            <p className="text-sm text-foreground/70">Utgifter</p>
            <p className="font-semibold text-red-400">-{expenses.toLocaleString('nb-NO')} kr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
