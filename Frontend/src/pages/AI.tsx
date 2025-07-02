
import AIComparisonCard from '@/components/AIComparisonCard';
import { useState } from 'react';
import { Calculator, Lightbulb, Zap } from 'lucide-react';

const AI = () => {
  const [amount, setAmount] = useState(500);
  const [inputAmount, setInputAmount] = useState('500');

  const generateComparisons = (amount: number) => {
    const comparisons = [
      { emoji: '🍕', item: 'Pizza slices', quantity: Math.floor(amount / 40) },
      { emoji: '🎬', item: 'Kinobilletter', quantity: Math.floor(amount / 120) },
      { emoji: '☕', item: 'Kaffe på kafé', quantity: Math.floor(amount / 50) },
      { emoji: '🍔', item: 'Hamburgere', quantity: Math.floor(amount / 80) },
      { emoji: '🎮', item: 'Spill', quantity: Math.floor(amount / 400) },
    ];

    return comparisons.filter(c => c.quantity > 0).slice(0, 3);
  };

  const handleAmountChange = (value: string) => {
    setInputAmount(value);
    const numValue = parseInt(value) || 0;
    setAmount(numValue);
  };

  const smartTips = [
    {
      icon: '💡',
      title: 'Smart sparing',
      tip: 'Hvis du sparer 50 kr hver dag, har du 18,250 kr på ett år!',
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      icon: '🎯',
      title: 'Målsparing',
      tip: 'Del store mål i mindre delmål. Det gjør det lettere å holde motivasjonen!',
      color: 'bg-green-500/20 text-green-400'
    },
    {
      icon: '⚡',
      title: 'Impulskjøp',
      tip: 'Vent 24 timer før du kjøper noe du egentlig ikke trenger.',
      color: 'bg-yellow-500/20 text-yellow-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center">
            <Zap size={20} className="text-background" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Økonomirådgiver</h1>
            <p className="text-foreground/70">Få smarte innsikter om pengene dine</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Amount Input */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Calculator size={20} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Hvor mye penger?</h2>
          </div>
          
          <div className="relative">
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-lg font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Skriv inn beløp..."
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70 font-medium">
              kr
            </span>
          </div>
          
          <div className="flex gap-2 mt-3">
            {[100, 250, 500, 1000].map((preset) => (
              <button
                key={preset}
                onClick={() => handleAmountChange(preset.toString())}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  amount === preset 
                    ? 'bg-primary text-background' 
                    : 'bg-muted text-foreground/70 hover:bg-muted/80'
                }`}
              >
                {preset} kr
              </button>
            ))}
          </div>
        </div>

        {/* AI Comparison */}
        {amount > 0 && (
          <AIComparisonCard 
            amount={amount} 
            comparisons={generateComparisons(amount)} 
          />
        )}

        {/* Smart Tips */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Smarte tips</h2>
          </div>
          
          <div className="space-y-4">
            {smartTips.map((tip, index) => (
              <div key={index} className="bg-card p-4 rounded-xl border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                    <p className="text-sm text-foreground/70">{tip.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <h2 className="text-lg font-semibold text-foreground mb-4">📊 Visste du at...</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤯</span>
              <p className="text-sm text-foreground/80">
                En kaffe til 50 kr hver dag koster deg 18,250 kr i året!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <p className="text-sm text-foreground/80">
                Hvis du sparer renter på 5%, blir 1000 kr til 1628 kr på 10 år!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <p className="text-sm text-foreground/80">
                90% av millionærer har et budsjett og følger det hver måned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
