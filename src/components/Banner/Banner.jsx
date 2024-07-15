import React from 'react';
import videoSrc from '../../components/Banner/imgs/Video.mp4';

const Banner = () => {
  return (
    <div id='Home' className="flex items-center justify-center h-screen bg-gray-900">
      <video
        
        src={videoSrc}
        autoPlay
        muted
        loop
        
      >
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
}; 

export default Banner;
