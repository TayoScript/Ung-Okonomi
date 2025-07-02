
import QuizCard from '@/components/QuizCard';
import { User, Award, Settings, Share2, BookOpen, Trophy } from 'lucide-react';

const Profile = () => {
  const userStats = {
    level: 12,
    totalPoints: 1247,
    streak: 7,
    completedQuizzes: 23,
    achievements: 8
  };

  const recentQuizzes = [
    {
      title: 'Budsjett-basics',
      description: 'Lær grunnleggende budsjettplanlegging',
      difficulty: 'Lett' as const,
      points: 50,
      completed: true
    },
    {
      title: 'Sparing & renter',
      description: 'Forstå hvordan renter påvirker sparingen',
      difficulty: 'Medium' as const,
      points: 75,
      completed: true
    },
    {
      title: 'Investeringsgrunnlag',
      description: 'Introduksjon til aksjer og fond',
      difficulty: 'Vanskelig' as const,
      points: 100,
      completed: false
    }
  ];

  const badges = [
    { name: 'Første quiz', emoji: '🏆', unlocked: true },
    { name: 'Sparemester', emoji: '💰', unlocked: true },
    { name: '7-dagers rekke', emoji: '🔥', unlocked: true },
    { name: 'AI-ekspert', emoji: '🤖', unlocked: false },
    { name: 'Målnår', emoji: '🎯', unlocked: false },
    { name: 'Pengeekspert', emoji: '👑', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-8 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center text-2xl">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Gjest_1234</h1>
            <p className="text-foreground/70">Level {userStats.level} • {userStats.totalPoints} poeng</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
            <Settings size={24} className="text-foreground/70" />
          </button>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-xl border border-border/50 text-center">
            <div className="text-2xl font-bold text-primary">{userStats.streak}</div>
            <div className="text-sm text-foreground/70">Dager på rad</div>
            <div className="text-lg mt-1">🔥</div>
          </div>
          
          <div className="bg-card p-4 rounded-xl border border-border/50 text-center">
            <div className="text-2xl font-bold text-primary">{userStats.completedQuizzes}</div>
            <div className="text-sm text-foreground/70">Quiz fullført</div>
            <div className="text-lg mt-1">📚</div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Level {userStats.level}</h2>
              <p className="text-sm text-foreground/70">247 poeng til neste level</p>
            </div>
            <Trophy size={24} className="text-primary" />
          </div>
          
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="gradient-green h-3 rounded-full transition-all duration-500"
              style={{ width: '75%' }}
            />
          </div>
          
          <div className="flex justify-between mt-2 text-sm text-foreground/70">
            <span>1,000 poeng</span>
            <span>1,500 poeng</span>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Mine utmerkelser</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  badge.unlocked 
                    ? 'bg-card border-primary/30 shadow-lg shadow-primary/10' 
                    : 'bg-card/50 border-border/30 opacity-50'
                }`}
              >
                <div className="text-2xl mb-1">{badge.emoji}</div>
                <div className="text-xs font-medium text-foreground">
                  {badge.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={20} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Siste aktivitet</h2>
          </div>
          
          <div className="space-y-3">
            {recentQuizzes.map((quiz, index) => (
              <QuizCard
                key={index}
                title={quiz.title}
                description={quiz.description}
                difficulty={quiz.difficulty}
                points={quiz.points}
                completed={quiz.completed}
              />
            ))}
          </div>
        </div>

        {/* Digital Certificate */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20">
          <div className="text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Digitalt Pengepass
            </h3>
            <p className="text-sm text-foreground/80 mb-4">
              Du har fullført grunnkurset i personlig økonomi!
            </p>
            
            <div className="bg-card p-4 rounded-xl border border-primary/30 mb-4">
              <div className="text-sm text-foreground/70 mb-1">Sertifikat utstedt til:</div>
              <div className="font-bold text-foreground text-lg">Gjest_1234</div>
              <div className="text-sm text-foreground/70 mt-1">15. desember 2024</div>
            </div>
            
            <button className="flex items-center gap-2 gradient-green text-background px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform mx-auto">
              <Share2 size={16} />
              Del sertifikat
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex flex-col items-center gap-2">
            <Settings size={24} className="text-primary" />
            <span className="font-medium text-foreground">Innstillinger</span>
          </button>
          
          <button className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex flex-col items-center gap-2">
            <Share2 size={24} className="text-primary" />
            <span className="font-medium text-foreground">Del app</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
