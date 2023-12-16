import { useState, useRef } from 'react';


const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handleMuteToggle = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div>
      <div style={{ position: 'relative', maxWidth: '800px', margin: 'auto' }}>
        <video
          ref={videoRef}
          controls
          width="100%"
        >
          <source src="../public/Videos/sample.mkv" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          boxSizing: 'border-box',
        }}>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
          <button onClick={handleMuteToggle}>{isMuted ? 'Unmute' : 'Mute'}</button>
        </div>
      </div>
    </div>
  );
};

export default App;

