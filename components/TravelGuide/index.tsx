import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const TravelGuide = () => {
  const [desktopType, setDesktopType] = useState(true);
  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth > 768) {
        setDesktopType(true);
      } else {
        setDesktopType(false);
      }
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [desktopType]);

  const updateWidth = () => {
    setDesktopType(window.innerWidth > 786 ? true : false);
  }

  return (
    <div className="md:w-1/2 md:pl-4 md:pt-0 w-full pt-8">
      <h1 className="text-lg leading-5 font-bold mb-5" style={{ color: '#001A1A' }}>Travel Guide</h1>
      <div className="travel-section">
        <h2 className="text-2xl font-semibold leading-5 mb-2">Hadwin Malone</h2>
        <p className="text-base font-normal">Guide since 2012</p>
        <button className="contact-btn">Contact</button>
        <div className="absolute top-6 right-6">
          <Image
            src="/travel.svg"
            width={desktopType ? 128 : 84}
            height={desktopType ? 128: 84}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
