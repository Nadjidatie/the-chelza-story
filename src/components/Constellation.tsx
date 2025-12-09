import { useState } from 'react';
import { Sparkles, Heart, Star, Zap, Moon, Sun } from 'lucide-react';

interface StarData {
  id: number;
  title: string;
  description: string;
  icon: typeof Star;
  position: { x: string; y: string };
}

const stars: StarData[] = [
  {
    id: 1,
    title: '14–24 : Les années de l\'ombre',
    description: 'Les années où tu as appris à survivre dans un monde qui ne t\'écoutait pas. Derrière ton silence, il y avait une force que personne ne voyait encore. Tu as traversé l\'ombre seule, mais tu ne t\'es jamais éteinte.',
    icon: Moon,
    position: { x: '15%', y: '5%' },
  },
  {
    id: 2,
    title: 'L\'enfant qui observait tout',
    description: 'Tu voyais les choses avant qu\'on te les dise. Ton cœur lisait les émotions comme un livre ouvert. Cette période a forgé ton empathie, ton intelligence émotionnelle, ta capacité rare à comprendre l\'invisible.',
    icon: Sparkles,
    position: { x: '70%', y: '12%' },
  },
  {
    id: 3,
    title: 'Partir pour se sauver',
    description: 'Le jour où tu es partie, personne n\'a compris la révolution silencieuse qui naissait. Tu avais peur, mais tu as choisi la liberté. Ce pas dans l\'inconnu est devenu ton premier acte d\'amour envers toi-même.',
    icon: Star,
    position: { x: '40%', y: '22%' },
  },
  {
    id: 4,
    title: 'Les Anges gardiens',
    description: 'L\'univers a placé sur ton chemin des âmes qui t\'ont reconstruite. Elles ont vu en toi ce que tu ne voyais plus : une femme bonne, forte, lumineuse. Grâce à elles, tu as appris la douceur humaine.',
    icon: Heart,
    position: { x: '25%', y: '35%' },
  },
  {
    id: 5,
    title: 'Écoute-moi',
    description: 'Tu guéris les gens sans même le vouloir. Ta voix apaise, ton regard rassure, ta présence stabilise. Tu es une femme-refuge, une épaule, un souffle. Ta sensibilité n\'est pas une faiblesse : c\'est ton don.',
    icon: Sparkles,
    position: { x: '75%', y: '40%' },
  },
  {
    id: 6,
    title: 'Je me choisis',
    description: 'Le jour où tu t\'es choisie, ton histoire a changé de direction. Tu as appris à dire non, à poser des limites, à t\'aimer assez pour ne plus te sacrifier. Ta renaissance commence ici.',
    icon: Zap,
    position: { x: '50%', y: '50%' },
  },
  {
    id: 7,
    title: 'Les femmes que je porte',
    description: 'Ton cœur bat pour les femmes. Tu veux les élever, les protéger, leur donner des armes pour réussir. Tu es une voix, une passerelle, une force. Tu deviens celle que tu aurais voulu rencontrer plus jeune.',
    icon: Heart,
    position: { x: '20%', y: '62%' },
  },
  {
    id: 8,
    title: 'La fille qui guérit',
    description: 'Tu t\'es plongée dans la psychologie, la santé mentale, la spiritualité. Tu as affronté tes ombres avec courage. Tu n\'oublies rien, mais tu guéris tout. Ta paix est devenue ta victoire.',
    icon: Sun,
    position: { x: '65%', y: '68%' },
  },
  {
    id: 9,
    title: 'Libre',
    description: 'Tu danses, tu voyages, tu ris, tu crées. Tu vis enfin pour toi. Le soleil te ressemble, la mer te ressemble, le mouvement te ressemble. Tu redeviens toi… en encore plus lumineuse.',
    icon: Sparkles,
    position: { x: '38%', y: '78%' },
  },
  {
    id: 10,
    title: 'Renaître pour les autres',
    description: 'Tu n\'es plus seulement un être humain : tu es une mission. Tu portes des femmes, des histoires, des causes. Tu marches pour la paix, pour la justice, pour un monde meilleur. Tu es une femme qui renaît… pour les autres.',
    icon: Star,
    position: { x: '55%', y: '90%' },
  },
];

export default function Constellation() {
  const [selectedStar, setSelectedStar] = useState<StarData | null>(null);

  return (
    <section className="relative py-20 px-6 min-h-screen">
      <h2 className="text-4xl font-light text-center text-white mb-4 tracking-wide">
        Les Étoiles de ton{' '}
        <span className="bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] bg-clip-text text-transparent">
          Histoire
        </span>
      </h2>
      <p className="text-white/60 text-center mb-16 font-light">
        Touche chaque étoile pour découvrir un chapitre
      </p>

      <div className="relative max-w-md mx-auto h-[800px]">
        {stars.map((star, index) => {
          const Icon = star.icon;
          return (
            <button
              key={star.id}
              onClick={() => setSelectedStar(star)}
              className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#4c3bcc]/40 to-[#ff4fa8]/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,79,168,0.4)] hover:shadow-[0_0_50px_rgba(255,79,168,0.8)] transition-all active:scale-95 group"
              style={{
                left: star.position.x,
                top: star.position.y,
                animation: `float 3s ease-in-out infinite ${index * 0.3}s`,
              }}
            >
              <Icon className="text-white group-hover:text-[#ff4fa8] transition-colors" size={28} />
            </button>
          );
        })}

        <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
          {stars.map((star, i) => {
            if (i === stars.length - 1) return null;
            const nextStar = stars[i + 1];
            return (
              <line
                key={`line-${star.id}`}
                x1={star.position.x}
                y1={star.position.y}
                x2={nextStar.position.x}
                y2={nextStar.position.y}
                stroke="rgba(255, 79, 168, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>
      </div>

      {selectedStar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedStar(null)}
        >
          <div
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-[0_0_60px_rgba(255,79,168,0.5)] max-w-sm w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4c3bcc] to-[#ff4fa8] flex items-center justify-center shadow-[0_0_40px_rgba(255,79,168,0.6)]">
                {(() => {
                  const Icon = selectedStar.icon;
                  return <Icon className="text-white" size={36} />;
                })()}
              </div>
            </div>
            <h3 className="text-2xl font-light text-white text-center mb-3 tracking-wide">
              {selectedStar.title}
            </h3>
            <p className="text-white/70 text-center font-light leading-relaxed">
              {selectedStar.description}
            </p>
            <button
              onClick={() => setSelectedStar(null)}
              className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] text-white font-light tracking-wide hover:shadow-[0_0_30px_rgba(255,79,168,0.6)] transition-all active:scale-95"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
