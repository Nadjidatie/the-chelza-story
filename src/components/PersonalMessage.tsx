export default function PersonalMessage() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(76,59,204,0.3)] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4c3bcc] to-[#ff4fa8] flex items-center justify-center shadow-[0_0_30px_rgba(255,79,168,0.5)]">
              <span className="text-2xl">✨</span>
            </div>

            <p className="text-white/90 text-center font-light leading-relaxed text-lg mb-6">
              Ce cadeau est un{' '}
              <span className="text-[#ff4fa8] font-normal">voyage</span> à travers tes{' '}
              <span className="text-[#4c3bcc] font-normal">souvenirs</span>, ta{' '}
              <span className="text-[#ff4fa8] font-normal">force</span> et ta{' '}
              <span className="text-[#4c3bcc] font-normal">lumière</span>.
            </p>

            <p className="text-white/70 text-center font-light text-sm leading-relaxed">
              Chaque note, chaque étoile, chaque instant capturé ici est une célébration de qui tu es.
              Dans cette constellation, tu trouveras des échos de ton essence, des reflets de ta beauté intérieure.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-center font-light text-sm italic">
                Pour Chelza, avec toute mon affection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
