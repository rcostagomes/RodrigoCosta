'use client';
import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      className="max-w-4xl mx-auto py-24 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
      <p className="text-gray-400 text-lg">
        Sou um desenvolvedor Fullstack com experiência em JavaScript, React, PHP, Laravel,
        Node.js e muito mais. Apaixonado por criar interfaces modernas e funcionais.
      </p>
    </motion.section>
  );
}
