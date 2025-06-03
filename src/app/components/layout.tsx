// components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-screen-xl mx-auto">
      {children}
    </div>
  );
}
