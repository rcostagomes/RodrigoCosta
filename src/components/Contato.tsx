'use client';
import { motion } from 'framer-motion';

export default function Contato() {
  return (
    <motion.section
      id="contato"
      className="py-24 px-4 max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
      <p className="text-gray-400 mb-6">Me envie uma mensagem ou conecte-se comigo nas redes sociais.</p>
      <a
        href="mailto:seu@email.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar Email
      </a>
    </motion.section>
  );
}
