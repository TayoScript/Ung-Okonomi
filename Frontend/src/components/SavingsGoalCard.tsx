
import { Target, Trophy } from 'lucide-react';

interface SavingsGoalProps {
  title: string;
  current: number;
  target: number;
  emoji: string;
}

const SavingsGoalCard = ({ title, current, target, emoji }: SavingsGoalProps) => {
  const progress = (current / target) * 100;
  const remaining = target - current;

  return (
    <div className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <Target size={20} className="text-primary" />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground/70">{current.toLocaleString('nb-NO')} kr</span>
          <span className="text-foreground/70">{target.toLocaleString('nb-NO')} kr</span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="gradient-green h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          <span className="text-sm text-foreground/70">
            {remaining > 0 ? `${remaining.toLocaleString('nb-NO')} kr igjen` : 'Mål nådd! 🎉'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoalCard;
