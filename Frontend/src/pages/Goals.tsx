
import SavingsGoalCard from '@/components/SavingsGoalCard';
import { Plus, Trophy, Target, TrendingUp } from 'lucide-react';

const Goals = () => {
  const goals = [
    { title: 'Førerkort', current: 8500, target: 15000, emoji: '🚗' },
    { title: 'Ny telefon', current: 3200, target: 8000, emoji: '📱' },
    { title: 'Konsert-billett', current: 850, target: 1200, emoji: '🎵' },
    { title: 'Ferie til Spania', current: 2100, target: 12000, emoji: '✈️' },
  ];

  const achievements = [
    { title: 'Første sparemål', description: 'Nådde ditt første sparemål!', emoji: '🏆', unlocked: true },
    { title: 'Konsekvent sparer', description: 'Sparte penger 7 dager på rad', emoji: '🔥', unlocked: true },
    { title: 'Stort mål', description: 'Sett et mål på over 10,000 kr', emoji: '🎯', unlocked: false },
    { title: 'Mestersparer', description: 'Nå 5 sparemål', emoji: '👑', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-8 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mine mål</h1>
            <p className="text-foreground/70">Hold deg motivert med sparemål</p>
          </div>
          <button className="w-10 h-10 gradient-green rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Plus size={20} className="text-background" />
          </button>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Progress Overview */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Fremgang</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-sm text-foreground/70">Aktive mål</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-foreground/70">Fullført</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">45%</div>
              <div className="text-sm text-foreground/70">Gjennomsnitt</div>
            </div>
          </div>
        </div>

        {/* Active Goals */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target size={20} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Aktive mål</h2>
          </div>
          <div className="space-y-4">
            {goals.map((goal, index) => (
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

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={20} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Utmerkelser</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-xl border transition-all duration-200 ${
                  achievement.unlocked 
                    ? 'bg-card border-primary/30 shadow-lg shadow-primary/10' 
                    : 'bg-card/50 border-border/30 opacity-60'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{achievement.emoji}</div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-foreground/70">
                    {achievement.description}
                  </p>
                  {achievement.unlocked && (
                    <div className="mt-2">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        Opplåst! 🎉
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivation */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20">
          <div className="text-center">
            <div className="text-4xl mb-2">🌟</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Du gjør det bra!
            </h3>
            <p className="text-sm text-foreground/80 mb-4">
              Du har allerede spart <span className="font-semibold text-primary">14,650 kr</span> mot dine mål.
              Fortsett det gode arbeidet!
            </p>
            <button className="gradient-green text-background px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
              Legg til nytt mål
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
