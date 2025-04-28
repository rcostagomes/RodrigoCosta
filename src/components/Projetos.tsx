'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projetos = [
 
  {
    nome: 'InkByte (Em produção)',
    imagem: '',
    link: '#',
    descricao: 'InkByte é um marketplace voltado para dropshipping de produtos gráficos, com integração via API para importação de produtos e gerenciamento completo de pedidos. A plataforma inclui chat interno entre usuários e vendedores, além de uma área administrativa para validação de cadastros e confirmação de pedidos. Futuramente, contará também com sistema de pagamento integrado para facilitar as transações.',
  },  
  {
    nome: 'BuyGames',
    imagem: '/buygames.png',
    link: 'https://buygames.com.br',
    descricao: 'BuyGames é uma rede social para gamers, com postagens, curtidas, compartilhamentos, stories e chat em tempo real, focada em interações para os amantes de games.'
  },
  {
    nome: 'BuyFarma',
    imagem: '/buyfarma.png',
    link: 'https://buyfarma.com.br', 
    descricao: 'BuyFarma é uma landing page desenvolvida para apresentar um futuro aplicativo de farmácia, focado em facilitar o acesso a medicamentos e produtos de saúde.',
  },
  
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projetos Recentes
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projetos.map((proj, idx) => (
          <motion.div
            key={proj.nome}
            className="bg-zinc-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full h-48">
                <Image
                  src={proj.imagem}
                  alt={`Imagem do projeto ${proj.nome}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{proj.nome}</h3>
                <p className="text-sm text-gray-300">{proj.descricao}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
