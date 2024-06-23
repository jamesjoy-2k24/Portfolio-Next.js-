import MainLayout from './mainLayout';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#030014',
};

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
