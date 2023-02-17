/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="overflow-y-scroll bg-zinc-900 text-white">{children}</body>
    </html>
  );
}
