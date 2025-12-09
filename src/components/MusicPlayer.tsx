import { useState, useRef, useEffect, MouseEvent } from 'react';
import { Play, Pause, SkipBack, SkipForward, X, ChevronDown } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  duration: string;
  cover?: string;
  src: string;
}

const tracks: Track[] = [
  { id: 1, title: '14–24 : Les années de l\'ombre', duration: '4:19', cover: '/images/image.png', src: '/music/1.wav' },
  { id: 2, title: 'L\'enfant qui observait tout', duration: '3:41', cover: '/images/image copy.png', src: '/music/2.wav' },
  { id: 3, title: 'Partir pour se sauver', duration: '3:34', cover: '/images/image copy copy.png', src: '/music/3.wav' },
  { id: 4, title: 'Les Anges gardiens', duration: '4:09', cover: '/images/image copy copy copy.png', src: '/music/4.wav' },
  { id: 5, title: 'Écoute-moi', duration: '4:23', cover: '/images/image copy copy copy copy.png', src: '/music/5.wav' },
  { id: 6, title: 'Je me choisis', duration: '3:11', cover: '/images/image copy copy copy copy copy.png', src: '/music/6.wav' },
  { id: 7, title: 'Les femmes que je porte', duration: '3:13', cover: '/images/image copy copy copy copy copy copy.png', src: '/music/7.wav' },
  { id: 8, title: 'La fille qui guérit', duration: '3:39', cover: '/images/image copy copy copy copy copy copy copy.png', src: '/music/8.wav' },
  { id: 9, title: 'Libre', duration: '2:50', cover: '/images/image copy copy copy copy copy copy copy copy.png', src: '/music/9.wav' },
  { id: 10, title: 'Renaître pour les autres', duration: '4:27', cover: '/images/image copy copy copy copy copy copy copy copy copy.png', src: '/music/10.wav' },
];

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [trackPlaying, setTrackPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // vue complète ouverte ?
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sync avec état parent
  useEffect(() => {
    setTrackPlaying(isPlaying);
  }, [isPlaying]);

  // Met à jour la source audio et joue / met pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.src;

    if (trackPlaying) {
      audio
          .play()
          .catch(() => {
            // autoplay bloqué éventuellement
          });
    } else {
      audio.pause();
    }
  }, [currentTrack, trackPlaying]);

  const handlePlayClick = (track: Track) => {
    const index = tracks.findIndex((t) => t.id === track.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
    setCurrentTrack(track);
    setTrackPlaying(true);
    setIsPlaying(true);
    setIsExpanded(false); // on commence en mini-player
  };

  const togglePlayPause = () => {
    setTrackPlaying((prev) => {
      const next = !prev;
      setIsPlaying(next);
      return next;
    });
  };

  const handleNext = () => {
    if (!tracks.length) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % tracks.length;
      const nextTrack = tracks[nextIndex];
      setCurrentTrack(nextTrack);
      return nextIndex;
    });
    setTrackPlaying(true);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    if (!tracks.length) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev - 1 + tracks.length) % tracks.length;
      const nextTrack = tracks[nextIndex];
      setCurrentTrack(nextTrack);
      return nextIndex;
    });
    setTrackPlaying(true);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
      <section className="relative py-16 px-6 pb-32">
        {/* Playlist */}
        <div className="max-w-md mx-auto">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(76,59,204,0.3)]">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white tracking-wide text-center">
                Playlist
              </h2>
            </div>

            <div className="space-y-3">
              {tracks.map((track, index) => (
                  <div
                      key={track.id}
                      className="group backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-[#ff4fa8]/50 hover:bg-white/10 transition-all"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                    <span className="text-white/40 text-xs font-light w-6">
                      {String(track.id).padStart(2, '0')}
                    </span>
                        <div className="flex-1">
                          <h3 className="text-white font-light text-sm tracking-wide">
                            {track.title}
                          </h3>
                          <p className="text-white/50 text-xs mt-0.5">{track.duration}</p>
                        </div>
                      </div>

                      <button
                          onClick={() => handlePlayClick(track)}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] flex items-center justify-center shadow-[0_0_20px_rgba(255,79,168,0.4)] hover:shadow-[0_0_30px_rgba(255,79,168,0.6)] transition-all active:scale-95 flex-shrink-0"
                      >
                        <Play size={16} className="text-white ml-0.5" fill="white" />
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* MINI-PLAYER EN BAS */}
        {currentTrack && (
            <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
              <div
                  className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,79,168,0.35)] flex items-center px-4 py-3"
              >
                {/* Zone cliquable pour agrandir */}
                <button
                    className="flex items-center space-x-3 flex-1 text-left"
                    onClick={() => setIsExpanded(true)}
                >
                  {currentTrack.cover && (
                      <img
                          src={currentTrack.cover}
                          alt={currentTrack.title}
                          className="w-10 h-10 rounded-lg object-cover"
                      />
                  )}
                  <div className="overflow-hidden">
                    <p className="text-white text-sm font-medium truncate">
                      {currentTrack.title}
                    </p>
                    <p className="text-white/60 text-xs">
                      {formatTime(currentTime)} • {currentTrack.duration}
                    </p>
                  </div>
                </button>

                {/* Bouton précédent dans le mini-player */}
                <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="ml-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center active:scale-95"
                >
                  <SkipBack size={16} className="text-white" />
                </button>

                {/* Play / pause dans le mini-player */}
                <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="ml-2 w-10 h-10 rounded-full bg-white flex items-center justify-center active:scale-95"
                >
                  {trackPlaying ? (
                      <Pause size={18} className="text-black" />
                  ) : (
                      <Play size={18} className="text-black ml-0.5" />
                  )}
                </button>

                {/* Next dans le mini-player */}
                <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="ml-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center active:scale-95"
                >
                  <SkipForward size={16} className="text-white" />
                </button>
              </div>
            </div>
        )}

        {/* FULL PLAYER */}
        {isExpanded && currentTrack && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div
                  className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-[0_0_60px_rgba(255,79,168,0.7)] w-full max-w-sm h-[50vh] flex flex-col"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  {/* Réduire vers le mini-player */}
                  <button
                      onClick={() => setIsExpanded(false)}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                      aria-label="Réduire le lecteur"
                  >
                    <ChevronDown className="text-white" size={20} />
                  </button>

                  {/* Fermer complètement (stop musique + fermer mini-player) */}
                  <button
                      onClick={() => {
                        setTrackPlaying(false);
                        setIsPlaying(false);
                        setCurrentTrack(null);
                        setIsExpanded(false);
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                      aria-label="Fermer le lecteur"
                  >
                    <X className="text-white" size={18} />
                  </button>
                </div>

                {/* Cover */}
                <div className="flex justify-center mb-6">
                  {currentTrack.cover ? (
                      <img
                          src={currentTrack.cover}
                          alt={currentTrack.title}
                          className="w-64 h-64 rounded-2xl object-cover shadow-[0_0_40px_rgba(255,79,168,0.6)]"
                      />
                  ) : (
                      <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#4c3bcc] to-[#ff4fa8] flex items-center justify-center shadow-[0_0_40px_rgba(255,79,168,0.6)]">
                        <div className="text-6xl text-white/80">♪</div>
                      </div>
                  )}
                </div>

                {/* Titre */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-light text-white mb-1 tracking-wide">
                    {currentTrack.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    Piste {String(currentTrack.id).padStart(2, '0')}
                  </p>
                </div>

                {/* Barre de progression */}
                <div className="mb-6">
                  <div
                      className="h-2 bg-white/10 rounded-full cursor-pointer mb-2"
                      onClick={handleProgressClick}
                  >
                    <div
                        className="h-full bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] rounded-full transition-all"
                        style={{
                          width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                        }}
                    />
                  </div>
                  <div className="flex justify-between text-white/60 text-xs">
                    <span>{formatTime(currentTime)}</span>
                    <span>{currentTrack.duration}</span>
                  </div>
                </div>

                {/* Contrôles */}
                <div className="mt-auto flex items-center justify-center space-x-6 pb-2">
                  <button
                      onClick={handlePrev}
                      className="w-12 h-12 rounded-full bg:white/10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95"
                  >
                    <SkipBack className="text-white" size={22} />
                  </button>

                  <button
                      onClick={togglePlayPause}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4c3bcc] to-[#ff4fa8] flex items-center justify-center shadow-[0_0_30px_rgba(255,79,168,0.6)] hover:shadow-[0_0_40px_rgba(255,79,168,0.8)] transition-all active:scale-95"
                  >
                    {trackPlaying ? (
                        <Pause size={28} className="text-white" fill="white" />
                    ) : (
                        <Play size={28} className="text-white ml-1" fill="white" />
                    )}
                  </button>

                  <button
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95"
                  >
                    <SkipForward className="text-white" size={22} />
                  </button>
                </div>
              </div>
            </div>
        )}

        {/* AUDIO TOUJOURS ACTIF */}
        <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleNext} // passe automatiquement à la suivante
        />
      </section>
  );
}
