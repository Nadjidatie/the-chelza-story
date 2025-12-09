import { Heart, Sparkles, Feather, Star, Crown } from 'lucide-react';

const values = [
  {
    id: 1,
    title: 'Empathie',
    description: 'Tu ressens les autres avec une profondeur rare, ton cœur comprend ce que les mots ne disent pas.',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Force intérieure',
    description: 'Tu as traversé l\'ombre pour devenir lumière, et c\'est cette résilience qui t\'ouvre toutes les routes.',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Sagesse émotionnelle',
    description: 'Tu apaises, tu analyses, tu guides : ta vision touche les âmes comme une vérité douce.',
    icon: Feather,
  },
  {
    id: 4,
    title: 'Créativité',
    description: 'Tu transformes chaque expérience en beauté, chaque idée en lumière, chaque moment en mouvement.',
    icon: Star,
  },
  {
    id: 5,
    title: 'Inspiration',
    description: 'Ta présence élève, ton histoire motive, ta parole donne du courage : tu inspires sans même t\'en rendre compte.',
    icon: Crown,
  },
];

export default function Values() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-light text-center text-white mb-4 tracking-wide">
          Ce que tu{' '}
          <span className="bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] bg-clip-text text-transparent">
            Représentes
          </span>
        </h2>
        <p className="text-white/60 text-center mb-12 font-light">
          Les qualités qui te rendent unique
        </p>

        <div className="space-y-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-[#ff4fa8]/30 shadow-[0_0_30px_rgba(255,79,168,0.2)] hover:shadow-[0_0_40px_rgba(255,79,168,0.4)] transition-all"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4c3bcc]/40 to-[#ff4fa8]/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,79,168,0.3)]">
                    <Icon className="text-white" size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
