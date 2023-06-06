import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MobileTopBar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <div className="flex items-center justify-between mobile-bar top-bar">
      <Image
        src="/Aloha.svg"
        width={95}
        height={35}
      />
      <div className="flex cursor-pointer" onClick={() => setVisibleMenu(true)}>
        <Image
          src="/menu.svg"
          width={40}
          height={40}
        />
      </div>
      {visibleMenu && (<div className="absolute top-0 right-0 bg-white h-screen p-5 z-10" style={{ width: '95%' }}>
        <div className="flex justify-end cursor-pointer" onClick={() => setVisibleMenu(false)}>
          <Image
            src="/close.svg"
            width={40}
            height={40}
          />
        </div>
        <ul className="nav-bar pt-10 pb-8">
          <Link href={'/'}>
            <li className="text-lg cursor-pointer mb-5 hover:font-bold">Home</li>
          </Link>
          <Link href={'/'}>
            <li className="text-lg cursor-pointer mb-5 hover:font-bold">Surfing</li>
          </Link>
          <Link href={'/'}>
            <li className="text-lg cursor-pointer mb-5 hover:font-bold">Hula</li>
          </Link>
          <Link href={'/'}>
            <li className="text-lg cursor-pointer hover:font-bold">Vulcano</li>
          </Link>
        </ul>
        <button className="book-trip-btn">Book a trip</button>
      </div>)}
    </div>
  );
};

export default MobileTopBar;
