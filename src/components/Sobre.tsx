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
      <p className="text-gray-400 text-lg leading-relaxed">
        Desde o início da minha trajetória, sempre fui movido pela paixão de transformar ideias em soluções digitais reais. 
        Comecei atuando como desenvolvedor fullstack freelancer, entregando projetos personalizados de sites e aplicações para diferentes clientes, 
        sempre buscando unir eficiência, escalabilidade e foco na experiência do usuário.
        <br /><br />
        Em 2022, mergulhei em um bootcamp intensivo na Driven, um dos programas de formação mais completos do mercado. 
        Lá, desenvolvi projetos práticos de ponta a ponta, consolidando conhecimentos em front-end, back-end, bancos de dados, testes de software e práticas DevOps. 
        Essa experiência acelerada me preparou ainda mais para os desafios reais do mercado de tecnologia.
        <br /><br />
        Mais recentemente, atuei como engenheiro de software na Agência F3X, focado no desenvolvimento de plataformas de e-commerce e redes sociais, 
        além da implementação de chatbots e integrações com APIs modernas. 
        Trabalhar em projetos que exigem alta performance e ótima usabilidade me trouxe ainda mais visão estratégica sobre tecnologia voltada a resultados.
        <br /><br />
        Ao longo dessa caminhada, desenvolvi habilidades sólidas com JavaScript, React.js, Node.js, PHP, Laravel, entre outras tecnologias. 
        Hoje sigo sempre buscando evoluir, entregando soluções inovadoras e impactantes para quem confia no meu trabalho.
      </p>
    </motion.section>
  );
}
