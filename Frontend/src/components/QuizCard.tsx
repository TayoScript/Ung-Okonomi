
import { Brain, Trophy, Play } from 'lucide-react';

interface QuizCardProps {
  title: string;
  description: string;
  difficulty: 'Lett' | 'Medium' | 'Vanskelig';
  points: number;
  completed?: boolean;
}

const QuizCard = ({ title, description, difficulty, points, completed = false }: QuizCardProps) => {
  const difficultyColors = {
    'Lett': 'bg-green-500/20 text-green-400',
    'Medium': 'bg-yellow-500/20 text-yellow-400',
    'Vanskelig': 'bg-red-500/20 text-red-400'
  };

  return (
    <div className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-green rounded-full flex items-center justify-center">
            <Brain size={16} className="text-background" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-foreground/70">{description}</p>
          </div>
        </div>
        {completed && <Trophy size={20} className="text-primary" />}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
          <span className="text-xs text-foreground/70">+{points} poeng</span>
        </div>
        
        <button className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
          <Play size={16} />
          <span className="text-sm font-medium">{completed ? 'Gjenta' : 'Start'}</span>
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
