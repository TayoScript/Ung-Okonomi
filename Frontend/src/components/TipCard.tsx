
import { Lightbulb, ChevronRight } from 'lucide-react';

interface TipCardProps {
  title: string;
  description: string;
  emoji: string;
  category: string;
}

const TipCard = ({ title, description, emoji, category }: TipCardProps) => {
  return (
    <div className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center text-lg flex-shrink-0">
          {emoji}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
              {category}
            </span>
            <Lightbulb size={14} className="text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
          <p className="text-xs text-foreground/70 line-clamp-2">{description}</p>
        </div>
        
        <ChevronRight size={16} className="text-foreground/40 flex-shrink-0" />
      </div>
    </div>
  );
};

export default TipCard;
