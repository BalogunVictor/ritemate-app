import React, { ReactNode } from 'react';
import Footer from '@ui/Footer';
import Logo from '@ui/Logo';

import Motion from './motion';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl">
      <Motion>
        <Logo />
        {children}
        <Footer />
      </Motion>
    </div>
  );
};
