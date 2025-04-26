'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
      <p className="text-gray-400 mb-12">
        Me envie uma mensagem ou conecte-se comigo nas redes sociais.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        {/* GitHub */}
        <motion.a
          href="https://github.com/rcostagomes"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition w-full sm:w-auto"
        >
          <FaGithub className="text-2xl" />
          GitHub
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/rodrigo-costa-645893244/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
        >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:costardgg@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition w-full sm:w-auto"
        >
          <FaEnvelope className="text-2xl" />
          Email
        </motion.a>
      </div>
    </motion.section>
  );
}
