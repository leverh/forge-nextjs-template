import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forge — Launch your next idea, faster.',
  description: 'A beautifully crafted Next.js 16 starter for modern builders. Less setup. More building.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
