import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioPlayer = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    // Initialize WaveSurfer instance when component mounts
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'lightgreen',
      progressColor: 'darkgreen',
      height: 150,
      barWidth: 2,
      barHeight: 1,
      responsive: true,
      normalize: true,
    });

    // Load the audio file
    wavesurferRef.current.load(audioFile);

    // When the audio file is loaded and ready
    wavesurferRef.current.on('ready', () => {
      setDuration(wavesurferRef.current.getDuration());
    });

    // Update current time while the audio is playing
    wavesurferRef.current.on('audioprocess', () => {
      setCurrentTime(wavesurferRef.current.getCurrentTime());
    });

    // Clean up on component unmount
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioFile]);

  const togglePlay = () => {
    if (isPlaying) {
      wavesurferRef.current.pause();
    } else {
      wavesurferRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekPosition = event.nativeEvent.offsetX / waveformRef.current.offsetWidth;
    wavesurferRef.current.seekTo(seekPosition);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <div ref={waveformRef} style={{ width: '100%', height: '150px', marginBottom: '20px' }} />
      
      <div>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>

      <div
        style={{
          width: '100%',
          height: '5px',
          backgroundColor: '#ddd',
          cursor: 'pointer',
          marginTop: '10px',
        }}
        onClick={handleSeek}
      >
        <div
          style={{
            width: `${(currentTime / duration) * 100}%`,
            height: '100%',
            backgroundColor: 'purple',
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
