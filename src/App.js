import './App.css';
import './referencing-values-with-refs/challenges3.css';
import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    
    videoRef.current.controls = true;
    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  videoRef.onplay = (event) => {
    setIsPlaying(false);
  };

  videoRef.onpause  = (event) => {
    setIsPlaying(true);
  };

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video ref={videoRef} width="250">
        <source 
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
