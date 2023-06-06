import React, { useEffect, useState } from 'react';
import TopBar from '../TopBar';
import MobileTopBar from '../MobileTopBar';

const Header = () => {
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
    <div className="header-container">
      <div className="container main-container mx-auto">
        {desktopType ? <TopBar /> : <MobileTopBar />}
        <div className="w-full text-center">
          <h1 className="header-title text-white"><span className="opacity-60">Welcome</span><br /> to Hawaii</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
