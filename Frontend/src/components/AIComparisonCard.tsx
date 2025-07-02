
import { Zap, ArrowRight } from 'lucide-react';

interface ComparisonItem {
  emoji: string;
  item: string;
  quantity: number;
}

interface AIComparisonCardProps {
  amount: number;
  comparisons: ComparisonItem[];
}

const AIComparisonCard = ({ amount, comparisons }: AIComparisonCardProps) => {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 gradient-green opacity-10 rounded-full -translate-y-4 translate-x-4" />
      
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 gradient-green rounded-full flex items-center justify-center">
          <Zap size={16} className="text-background" />
        </div>
        <h3 className="font-bold text-lg text-foreground">Hva kunne {amount} kr blitt?</h3>
      </div>
      
      <div className="space-y-3">
        {comparisons.map((comparison, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{comparison.emoji}</span>
              <div>
                <p className="font-medium text-foreground">{comparison.item}</p>
                <p className="text-sm text-foreground/70">
                  {comparison.quantity} {comparison.quantity === 1 ? 'stk' : 'stk'}
                </p>
              </div>
            </div>
            <ArrowRight size={16} className="text-primary" />
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-sm text-center text-foreground/80">
          💡 <span className="font-medium">Pro-tips:</span> Tenk over hva du virkelig trenger før du kjøper!
        </p>
      </div>
    </div>
  );
};

export default AIComparisonCard;
