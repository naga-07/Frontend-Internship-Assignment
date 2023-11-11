import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioSrc }) => {
  const waveformRef = useRef(null);

  useEffect(() => {
    if (audioSrc) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'violet',
        progressColor: 'purple',
      });

      wavesurfer.load(audioSrc);

      return () => {
        wavesurfer.destroy();
      };
    }
  }, [audioSrc]);

  return <div ref={waveformRef} />;
};

export default Waveform;
