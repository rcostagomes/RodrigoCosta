"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] border-b border-gray-300 dark:border-gray-800 shadow-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo SVG */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95, rotate: -3 }}
        >
          <Link href="/" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 60"
              width="60"
              height="30"
            >
              <text
                x="0"
                y="45"
                fontFamily="Poppins, sans-serif"
                fontSize="44"
                fontWeight="600"
                fill="#3B82F6"
                letterSpacing="2"
              >
                RC
              </text>
            </svg>
          </Link>
        </motion.div>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-[var(--foreground)]"
            aria-label="Abrir Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navegação */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {[
              { name: "Sobre", href: "#sobre" },
              { name: "Projetos", href: "#projetos" },
              { name: "Contato", href: "#contato" },
            ].map((item, idx) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="text-[var(--foreground)] transition"
                >
                  {item.name}
                  <span className="block h-0.5 max-w-0 bg-blue-600 transition-all duration-300 group-hover:max-w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Navegação Mobile */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-[var(--background)] md:hidden"
            >
              <ul className="flex flex-col items-center gap-4 px-4 py-4">
                <li>
                  <Link
                    href="#sobre"
                    className="hover:text-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projetos"
                    className="hover:text-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="hover:text-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
