'use client';
import { PropsWithChildren } from 'react';

import MobileContentLayout from '@/components/server/MobileNavLayout';

import Header from './features/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return <MobileContentLayout header={<Header />}>{children}</MobileContentLayout>;
};

Layout.displayName = 'MeDataLayout';

export default Layout;
