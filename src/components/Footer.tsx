export default function Footer() {
    return (
      <footer className="border-t border-gray-300 dark:border-gray-800 py-4 text-center text-sm text-[var(--foreground)]">
        © {new Date().getFullYear()} Rodrigo Costa. Todos os direitos reservados.
      </footer>
    );
  }
  