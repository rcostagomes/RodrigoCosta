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
      <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
      <p className="text-gray-400 text-lg leading-relaxed text-justify">
        Minha jornada na tecnologia começou através de um bootcamp intensivo da Driven, onde mergulhei em projetos práticos e desenvolvi habilidades sólidas em front-end, back-end, bancos de dados, testes e práticas DevOps. 
        Essa formação me preparou para enfrentar os desafios do mercado de trabalho com uma visão completa sobre o ciclo de desenvolvimento de software.
        <br /><br />
        Após o bootcamp, atuei como desenvolvedor fullstack autônomo, entregando projetos personalizados de sites e aplicações para diversos clientes. 
        Trabalhar de forma independente me ajudou a desenvolver agilidade, responsabilidade e um olhar ainda mais atento às necessidades dos projetos, sempre focando na escalabilidade, eficiência e experiência do usuário.
        <br /><br />
        Em seguida, assumi o cargo de engenheiro de software na Agência F3X, onde participei do desenvolvimento de plataformas de e-commerce e redes sociais de alta performance. 
        Também implementei chatbots para automação de atendimento, além de trabalhar com integrações de APIs modernas e gerenciamento de bancos de dados. 
        Essa experiência me proporcionou ainda mais maturidade técnica e visão estratégica focada em resultados.
        <br /><br />
        Atualmente, continuo me especializando: estou cursando Análise e Desenvolvimento de Sistemas, buscando sempre expandir meus conhecimentos e entregar soluções inovadoras e impactantes.
        <br /><br />
        Tenho habilidades sólidas em tecnologias como JavaScript, React.js, Node.js, PHP, Laravel, entre outras, e sigo evoluindo constantemente para criar experiências digitais de alto nível.
      </p>
    </motion.section>
  );
}
