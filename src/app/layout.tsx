import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rodrigo Costa | Portfólio',
  description: 'Portfólio de desenvolvedor fullstack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
    <body
  className="min-h-screen bg-no-repeat bg-center bg-cover bg-fixed text-[var(--foreground)] transition-colors duration-300"
  style={{ backgroundImage: "url('/bg-city.png')" }}
>
  <div className="backdrop-blur-sm bg-black/60 min-h-screen">
    <Header />
    <main className="px-6 py-10">{children}</main>
    <Footer />
  </div>
</body>
    </html>
  );
}
