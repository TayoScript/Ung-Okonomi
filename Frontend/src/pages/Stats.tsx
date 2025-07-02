
import { BarChart3, TrendingUp, TrendingDown, Calendar } from 'lucide-react';

const Stats = () => {
  const monthlyData = [
    { month: 'Jan', income: 1200, expenses: 800, savings: 400 },
    { month: 'Feb', income: 1100, expenses: 750, savings: 350 },
    { month: 'Mar', income: 1300, expenses: 900, savings: 400 },
    { month: 'Apr', income: 1250, expenses: 650, savings: 600 },
    { month: 'Mai', income: 1200, expenses: 700, savings: 500 },
    { month: 'Jun', income: 1400, expenses: 850, savings: 550 },
  ];

  const categories = [
    { name: 'Mat & drikke', amount: 2400, percentage: 35, emoji: '🍕', color: 'bg-red-500' },
    { name: 'Transport', amount: 1200, percentage: 18, emoji: '🚌', color: 'bg-blue-500' },
    { name: 'Underholdning', amount: 800, percentage: 12, emoji: '🎬', color: 'bg-purple-500' },
    { name: 'Klær', amount: 600, percentage: 9, emoji: '👕', color: 'bg-green-500' },
    { name: 'Annet', amount: 1800, percentage: 26, emoji: '📦', color: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-8 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center">
            <BarChart3 size={20} className="text-background" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Statistikk</h1>
            <p className="text-foreground/70">Oversikt over din økonomi</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Monthly Overview */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={20} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Denne måneden</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-sm text-foreground/70">Inntekt</span>
              </div>
              <div className="text-xl font-bold text-green-400">1,400 kr</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingDown size={16} className="text-red-400" />
                <span className="text-sm text-foreground/70">Utgifter</span>
              </div>
              <div className="text-xl font-bold text-red-400">850 kr</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <span className="text-sm text-foreground/70">Spart</span>
              </div>
              <div className="text-xl font-bold text-primary">550 kr</div>
            </div>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <h2 className="text-lg font-semibold text-foreground mb-4">6-måneders trend</h2>
          
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 text-sm text-foreground/70 font-medium">
                  {data.month}
                </div>
                
                <div className="flex-1 relative">
                  <div className="flex items-center gap-2 h-8">
                    {/* Income bar */}
                    <div className="flex-1 bg-muted rounded-full h-2 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                        style={{ width: `${(data.income / 1500) * 100}%` }}
                      />
                    </div>
                    
                    {/* Expenses bar */}
                    <div className="flex-1 bg-muted rounded-full h-2 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                        style={{ width: `${(data.expenses / 1500) * 100}%` }}
                      />
                    </div>
                    
                    {/* Savings bar */}
                    <div className="flex-1 bg-muted rounded-full h-2 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-primary rounded-full"
                        style={{ width: `${(data.savings / 1500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="w-16 text-right text-sm font-medium text-foreground">
                  {data.savings} kr
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-foreground/70">Inntekt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-foreground/70">Utgifter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-foreground/70">Spart</span>
            </div>
          </div>
        </div>

        {/* Spending Categories */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <h2 className="text-lg font-semibold text-foreground mb-4">Utgifter per kategori</h2>
          
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">{category.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-foreground">{category.name}</span>
                      <span className="text-sm text-foreground/70">{category.amount} kr</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-foreground/70 w-10 text-right">
                    {category.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20">
          <h2 className="text-lg font-semibold text-foreground mb-4">💡 Innsikter</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">📈</span>
              <p className="text-sm text-foreground/80">
                Du sparer <span className="font-semibold text-primary">39%</span> av inntekten din - det er bedre enn gjennomsnittet!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🍕</span>
              <p className="text-sm text-foreground/80">
                Du bruker mest penger på mat. Prøv å lage mer mat hjemme for å spare penger.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🎯</span>
              <p className="text-sm text-foreground/80">
                Med denne spareraten når du målet på <span className="font-semibold text-primary">15,000 kr</span> om 12 måneder!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
