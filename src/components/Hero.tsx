export default function Hero() {
    return (
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Rodrigo Costa</h1>
        <p className="text-lg text-gray-600 mb-6">
          Desenvolvedor Fullstack apaixonado por tecnologia e design.
        </p>
        <a
          href="/curriculo.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Baixar Currículo
        </a>
      </section>
    );
  }
  