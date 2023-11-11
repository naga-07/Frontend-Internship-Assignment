import React, { useRef, useState } from 'react';
import Waveform from './Waveform';
import './index.css'; // Import the styles

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      videoRef.current.src = url;

      // Check if the video has audio
      if (videoRef.current.canPlayType('audio/mp4') === '') {
        alert('The selected video does not contain audio.');
        videoRef.current.src = ''; // Clear the video source
      }
    }
  };

  return (
    <div className="video-container">
      <input type="file" onChange={handleFileChange} accept="video/*" />
      <div>
        <video
          ref={videoRef}
          width="640"
          height="360"
          onClick={handleTogglePlay}
        />
        <button className="play-button" onClick={handleTogglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <Waveform audioSrc={videoRef.current?.src} />
    </div>
  );
};

export default VideoPlayer;
