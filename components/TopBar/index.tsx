import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const TopBar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between top-bar">
      <div className="flex items-center justify-between">
        <Image
          src="/Aloha.svg"
          width={95}
          height={35}
        />
        <ul className="flex nav-bar md:ml-20">
          <Link href={'/'}>
            <li className="cursor-pointer mr-10 hover:font-bold">Home</li>
          </Link>
          <Link href={'/'}>
            <li className="cursor-pointer mr-10 hover:font-bold">Surfing</li>
          </Link>
          <Link href={'/'}>
            <li className="cursor-pointer mr-10 hover:font-bold">Hula</li>
          </Link>
          <Link href={'/'}>
            <li className="cursor-pointer hover:font-bold">Vulcano</li>
          </Link>
        </ul>
      </div>
      <button className="book-trip-btn">Book a trip</button>
    </div>
  );
};

export default TopBar;
