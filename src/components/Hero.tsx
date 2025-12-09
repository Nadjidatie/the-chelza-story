import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#4c3bcc]/20 via-transparent to-transparent opacity-60" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff4fa8]/30 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 text-center space-y-6 animate-fadeIn">
        <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-extralight mb-8">
          The Chelza Story
        </p>

        <h1 className="text-5xl font-light tracking-wide text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span className="text-[#ff4fa8] drop-shadow-[0_0_30px_rgba(255,79,168,0.6)]">
            Constellation de Souvenirs
          </span>
        </h1>

        <p className="text-white/80 text-base font-light leading-relaxed max-w-md mx-auto px-4 mt-8">
          Un voyage musical à travers ton histoire, tes douleurs, ta force,
          <br />
          et la femme lumineuse que tu es devenue.
        </p>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#ff4fa8] animate-bounce cursor-pointer group"
        aria-label="Scroll down"
      >
        <ChevronDown
          size={40}
          className="drop-shadow-[0_0_15px_rgba(255,79,168,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(255,79,168,1)] transition-all"
        />
      </button>
    </section>
  );
}
