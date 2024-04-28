'use client'
import React, { useState } from 'react';

const ImageAudioPlayer = () => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    console.log('Click event triggered');
    if (audio === null) {
      console.log('Audio is null, initializing...');
      const newAudio = new Audio('/song.mp3');
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        console.log('Pausing audio');
        audio.pause();
      } else {
        console.log('Resuming audio');
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <img

        src="as.png"
        alt="Clickable Image"
        onClick={handleClick}
        style={{ cursor: 'pointer', height:50 }}
      />
    </div>
  );
};

export default ImageAudioPlayer;
