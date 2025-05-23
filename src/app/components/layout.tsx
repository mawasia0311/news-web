// components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-50">
      <div className='max-w-[1000px] mx-auto'>
        {children}
      </div>
    </div>
  );
}
