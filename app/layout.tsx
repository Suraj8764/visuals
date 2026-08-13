import type {Metadata} from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css'; // Global styles
import { LenisProvider } from '@/components/lenis-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'Premium Software Development Agency | We Build Digital Products',
  description: 'We turn business ideas into powerful digital products. From business websites to complete digital platforms, we design and build scalable applications.',
  openGraph: {
    title: 'Premium Software Development Agency',
    description: 'We turn business ideas into powerful digital products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Software Development Agency',
    description: 'We turn business ideas into powerful digital products.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${orbitron.variable}`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black" suppressHydrationWarning>
        <LenisProvider>
          <div className="relative z-10 flex min-h-screen flex-col font-sans">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
