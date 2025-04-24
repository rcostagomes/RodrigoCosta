import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Projetos from '@/components/Projetos';

export default function HomePage() {
  return (
    <main className="px-6 py-8">
      <Hero />
      <Sobre />
      <Projetos />
    </main>
  );
}
export const metadata = {
  title: 'Início | Portfólio',
  description: 'Portfólio de um desenvolvedor web',
};
