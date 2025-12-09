import { useState } from 'react';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Constellation from './components/Constellation';
import Values from './components/Values';
import PersonalMessage from './components/PersonalMessage';
import FinalSection from './components/FinalSection';
import StarField from './components/StarField';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0f29] via-[#1a1535] to-[#0b0f29] overflow-x-hidden">
      <StarField />

      <div className="relative z-10">
        <Hero />
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Constellation />
        <Values />
        <PersonalMessage />
        <FinalSection setIsPlaying={setIsPlaying} />
      </div>
    </div>
  );
}

export default App;
