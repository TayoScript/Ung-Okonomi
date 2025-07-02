
import BalanceCard from '@/components/BalanceCard';
import SavingsGoalCard from '@/components/SavingsGoalCard';
import TipCard from '@/components/TipCard';
import { Star, Gift, Coffee } from 'lucide-react';

const Home = () => {
  const savingsGoals = [
    { title: 'Førerkort', current: 8500, target: 15000, emoji: '🚗' },
    { title: 'Ny telefon', current: 3200, target: 8000, emoji: '📱' },
  ];

  const tips = [
    {
      title: 'Spar penger på kaffe',
      description: 'Lag kaffe hjemme i stedet for å kjøpe ute. Du kan spare opptil 500 kr i måneden!',
      emoji: '☕',
      category: 'Sparing'
    },
    {
      title: 'Sammenlign priser',
      description: 'Bruk prissammenlikning før større kjøp. Det kan spare deg for hundrevis av kroner.',
      emoji: '🔍',
      category: 'Smart handel'
    },
    {
      title: 'Budsjett-appen',
      description: 'Hold oversikt over utgiftene dine med en enkel budsjett-app på telefonen.',
      emoji: '📊',
      category: 'Verktøy'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-8 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Hei, Gjest_1234! 👋</h1>
            <p className="text-foreground/70">Klar for å lære noe nytt i dag?</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Star size={16} className="text-primary" />
            </div>
            <span className="font-semibold text-primary">1,247 poeng</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Balance Card */}
        <BalanceCard />

        {/* Savings Goals */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Mine sparemål</h2>
            <button className="text-primary hover:text-primary/80 font-medium text-sm">
              Se alle
            </button>
          </div>
          <div className="grid gap-4">
            {savingsGoals.map((goal, index) => (
              <SavingsGoalCard
                key={index}
                title={goal.title}
                current={goal.current}
                target={goal.target}
                emoji={goal.emoji}
              />
            ))}
          </div>
        </div>

        {/* Today's Tips */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Dagens tips</h2>
            <button className="text-primary hover:text-primary/80 font-medium text-sm">
              Flere tips
            </button>
          </div>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <TipCard
                key={index}
                title={tip.title}
                description={tip.description}
                emoji={tip.emoji}
                category={tip.category}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Hurtigvalg</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex flex-col items-center gap-2">
              <Gift size={24} className="text-primary" />
              <span className="font-medium text-foreground">Dagens quiz</span>
              <span className="text-xs text-foreground/70">+50 poeng</span>
            </button>
            
            <button className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex flex-col items-center gap-2">
              <Coffee size={24} className="text-primary" />
              <span className="font-medium text-foreground">AI-tips</span>
              <span className="text-xs text-foreground/70">Få personlige råd</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
