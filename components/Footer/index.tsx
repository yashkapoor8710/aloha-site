import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="flex items-center px-5 footer-container">
        <div className="container main-container mx-auto">
          <Image
            src="/Aloha-footer.svg"
            width={95}
            height={35}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
