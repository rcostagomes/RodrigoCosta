'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 sm:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-bold mb-6 leading-tight text-white"
      >
        Olá, eu sou{' '}
        <span className="text-blue-500 whitespace-nowrap">Rodrigo Costa</span>
        {', '}
        25 anos, de São Gonçalo - RJ.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed"
      >
        Desenvolvedor Fullstack apaixonado por tecnologia e design.
      </motion.p>

      <motion.a
  href="/Rodrigo_Gomes_Costa.pdf"
  download="Rodrigo_Gomes_Costa.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
>
        Baixar Currículo
      </motion.a>
    </section>
  );
}
