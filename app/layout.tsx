import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anderson Ekechi — Systems Architect',
  description: 'Founder of BaceFlip. I build apps, AI systems, and messaging infrastructure for African businesses. LLB (Law).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}