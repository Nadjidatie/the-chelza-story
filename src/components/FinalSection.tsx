import { Play } from 'lucide-react';

interface FinalSectionProps {
  setIsPlaying: (playing: boolean) => void;
}

export default function FinalSection({ setIsPlaying }: FinalSectionProps) {
  const handlePlayAlbum = () => {
    setIsPlaying(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative py-24 px-6 min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-[#4c3bcc]/20 via-transparent to-transparent opacity-40" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-[#ff4fa8]/30 blur-[60px] rounded-full animate-pulse" />
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#4c3bcc] to-[#ff4fa8] flex items-center justify-center shadow-[0_0_60px_rgba(255,79,168,0.6)] animate-float">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#4c3bcc]/50 to-[#ff4fa8]/50 backdrop-blur-sm flex items-center justify-center">
              <span className="text-5xl animate-pulse">⭐</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-light text-white mb-4 tracking-wide leading-tight">
          Que cette{' '}
          <span className="bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] bg-clip-text text-transparent">
            Constellation
          </span>
          <br />
          t'accompagne
        </h2>

        <p className="text-white/70 font-light mb-10 leading-relaxed">
          Dans chaque moment, rappelle-toi de ta lumière unique qui éclaire le monde
        </p>

        <button
          onClick={handlePlayAlbum}
          className="group relative inline-flex items-center justify-center space-x-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] text-white font-light text-lg tracking-wide shadow-[0_0_40px_rgba(255,79,168,0.6)] hover:shadow-[0_0_60px_rgba(255,79,168,0.8)] transition-all active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4fa8] to-[#4c3bcc] opacity-0 group-hover:opacity-100 transition-opacity" />
          <Play size={22} fill="white" className="relative z-10" />
          <span className="relative z-10">Écouter l'album</span>
        </button>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm font-light">
            Créé avec amour pour Chelza
          </p>
        </div>
      </div>
    </section>
  );
}
