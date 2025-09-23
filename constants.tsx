import React from 'react';
import type { Project, Experience } from './types';

export const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Sobre Mim', path: '/about' },
  { name: 'CV', path: 'https://drive.google.com/file/d/1P2LhJtysq2VGfQDYwJ1s1S12pkQCsJmY/view?usp=sharing' },
];

export const SOCIAL_LINKS = [
  { name: 'E-mail', url: 'mailto:rgestevao@gmail.com' },
  { name: 'GitHub', url: 'https://github.com/rodrigoges' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rodrigo-gouveia-estevao/' },
  { name: 'Instagram', url: 'https://www.instagram.com/rodrigoge_/' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Zappin',
    description: 'Chatbot com IA para auxílio de pequenos e médios comércios na gestão de suas vendas com clientes via WhatsApp.',
    images: ['assets/zappin-image.png'],
    githubUrl: 'https://github.com/zappin-app/zappin-web',
  },
  {
    title: 'Passit',
    description: 'Sistema para doações para ONGs, instituições e pessoas que necessitam de ajuda.',
    images: ['assets/PassIt-image.png'],
    githubUrl: 'https://github.com/rodrigoges/pass-it',
  },
  {
    title: 'GlicoControl',
    description: 'Um aplicativo para gerenciamento e controle de glicemias diárias.',
    images: ['assets/glicocontrol-image.png'],
    githubUrl: 'https://github.com/rodrigoges/glicocontrol',
  },
];

export const EXPERIENCES: Experience[] = [
    {
        date: '2022 - Atualmente',
        title: 'Backend Software Developer',
        company: 'HST Card Technology',
        companyUrl: 'https://hst.com.br/pt-br/',
        description: [
            'Atuação em projetos voltados a meios de pagamento e tokenização.',
            'Otimização de uma solução de alta escala que gerencia mais de 500 mil requisições diárias.',
            'Participação em decisões de modelagem de dados e de soluções, garantindo a integridade e disponibilidade de informações.',
            'Modelagem e arquitetura de soluções, visando escalabilidade e robustez.',
            'Análise e coleta de necessidades técnicas, facilitando a integração e acelerando a produtividade da equipe de desenvolvimento.'
        ]
    },
    {
        date: '2022',
        title: 'Backend Software Engineer Jr.',
        company: 'Tinnova Software Solutions',
        companyUrl: 'https://tinnova.com.br/',
        description: [
            'Participação em projetos alocados na PagSeguro.',
            'Construção de soluções back-end em Kotlin de alta escalabilidade, com alto processamento de requisições por segundo.',
            'Garantia de qualidade de software, através da criação e manutenção de testes de unidade e de integração em esteiras de entregas.',
            'Implementação de comunicação assíncrona entre serviços para processamento de dados de forma eficiente.'
        ]
    },
    {
        date: '2020 - 2022',
        title: 'Backend Software Developer Jr.',
        company: 'B2ML Sistemas',
        companyUrl: 'https://www.b2ml.com.br/',
        description: [
            'Atuação em uma solução médica para uma rede de clínicas e hospitais.',
            'Desenvolvimento de funcionalidades de agendamento de exames, otimizando o processo de consultas e marcação de cirurgias em toda a rede.',
            'Colaboração com o time de produtos na criação e prototipação de interfaces, garantindo a usabilidade e aderência às necessidades dos usuários.',
            'Solução para migração de informações entre soluções e sistemas.'
        ]
    }
];

export const ExternalLinkIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);