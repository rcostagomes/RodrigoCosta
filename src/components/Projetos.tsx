'use client';
import { motion } from 'framer-motion';

const projetos = [
  { nome: 'projeto 1', tech: 'descrição' },
  { nome: 'projeto 2', tech: 'descrição' },
  { nome: 'projeto 3', tech: 'descrição' },
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

      <div className="grid md:grid-cols-3 gap-6">
        {projetos.map((proj, idx) => (
          <motion.div
            key={proj.nome}
            className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.nome}</h3>
            <p className="text-sm text-gray-300">{proj.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
