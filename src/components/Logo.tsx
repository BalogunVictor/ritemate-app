import React from 'react';
import Image from 'next/image';

import LogoImage from './assest/logo.svg';

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="pl-20"
      height={77}
      src={LogoImage}
      width={310}
    />
  );
};

export default Logo;
