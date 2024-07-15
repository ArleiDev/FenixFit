import React, { useState, useEffect } from 'react';
import videoSrcDesktop from '../../components/Banner/imgs/Video.mp4';
import videoSrcMobile from '../../components/Banner/imgs/VideoMobile.mp4';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='Home' className="flex items-center justify-center h-screen bg-gray-900">
      <video
        src={isMobile ? videoSrcMobile : videoSrcDesktop}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      >
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default Banner;
