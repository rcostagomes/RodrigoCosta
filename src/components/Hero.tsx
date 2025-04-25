'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-32 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Olá, eu sou Rodrigo Costa
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300 mb-6"
      >
        Desenvolvedor Fullstack apaixonado por tecnologia e design.
      </motion.p>

      <motion.a
        href="/curriculo.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Baixar Currículo
      </motion.a>
    </section>
  );
}
