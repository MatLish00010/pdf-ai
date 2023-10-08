import React from 'react';

import {cn} from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function MaxWidthWrapper({className, children}: Props) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 mb:px-20', className)}>
      {children}
    </div>
  );
}
