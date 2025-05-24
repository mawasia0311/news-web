// components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {children}
    </div>
  );
}
