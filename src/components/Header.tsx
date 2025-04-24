'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--background)] border-b border-gray-300 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-[var(--foreground)]">
          Rodrigo Costa
        </Link>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-[var(--foreground)]">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className={`absolute top-16 left-0 w-full bg-[var(--background)] md:static md:w-auto md:flex ${open ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col items-center gap-4 px-4 py-4 md:flex-row md:gap-6 md:p-0">
            <li><Link href="#sobre" className="hover:text-blue-600">Sobre</Link></li>
            <li><Link href="#projetos" className="hover:text-blue-600">Projetos</Link></li>
            <li><Link href="#contato" className="hover:text-blue-600">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
