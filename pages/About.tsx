import React from 'react';
import { EXPERIENCES } from '../constants';
import type { Experience } from '../types';
import FadeInOnScroll from '../components/FadeInOnScroll';

const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => (
    <FadeInOnScroll>
        <div className="mb-12">
            <p className="text-grey mb-1">{experience.date}</p>
            <h3 className="text-2xl font-bold text-white mb-1">
                {experience.title} - {' '}
                {experience.companyUrl ? (
                    <a 
                        href={experience.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors duration-300"
                    >
                        {experience.company}
                    </a>
                ) : (
                    experience.company
                )}
            </h3>
            <ul className="list-disc list-inside text-grey space-y-2 pl-2">
                {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </FadeInOnScroll>
);

const About: React.FC = () => {
    const images = [
        '/aboutMe/Imagem01.webp',
        '/aboutMe/Imagem02.webp',
        '/aboutMe/Imagem03.webp',
        '/aboutMe/Imagem04.webp',
        '/aboutMe/Imagem05.webp',
        '/aboutMe/Imagem06.webp',
        '/aboutMe/Imagem07.webp',
        '/aboutMe/Imagem08.webp',
    ];
    
  return (
    <div>
        <FadeInOnScroll>
            <section className="mb-16 md:mb-24">
                 <div
                    className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 animate-scroll group-hover:[animation-play-state:paused]">
                        {images.map((src, index) => (
                            <li key={`imgA-${index}`} className="flex-shrink-0">
                                <div className="w-40 h-56 md:w-40 md:h-56">
                                    <img
                                        src={src}
                                        alt={`Rodrigo Gouveia Estevão portrait ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                         {images.map((src, index) => (
                            <li key={`imgB-${index}`} className="flex-shrink-0">
                                <div className="w-40 h-56 md:w-40 md:h-56">
                                    <img
                                        src={src}
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </FadeInOnScroll>

        <FadeInOnScroll>
            <section className="mb-16 md:mb-24">
                <h2 className="text-3xl font-bold text-white mb-6">Um pouco sobre mim</h2>
                <div className="space-y-4 text-grey text-lg text-justify">
                    <p>
                        Com uma formação multidisciplinar e multicultural, sempre procurei ter empatia pelas pessoas, com uma mentalidade de crescimento principalmente no processo para solução de problemas.
                    </p>
                    <p>
                        Já trabalhei em diversas empresas e nos mais variados projetos, entregando soluções robustas e escaláveis resolvendo os desafios mais complexos e que acima de tudo solucionem problemas e agreguem valor. Atualmente trabalho em soluções que envolvem meios de pagamento e transações bancárias para mais de 19 países na América Latina, gerenciando com segurança mais de 500 mil requisições diárias.
                    </p>
                    <p>
                        Anteriormente já trabalhei em aplicações que auxiliam o setor médico, gerenciando clínicas e hospitais e agendando consultas e exames, visando uma maior agilidade para o setor.
                    </p>
                    <p>
                        Contribuo ativamente para a construção de soluções intuitivas, além de disseminar o conhecimento técnico e de negócio, afim de evoluir o produto e também as pessoas que fazem parte do time.
                    </p>
                </div>
            </section>
        </FadeInOnScroll>

        <section>
            <FadeInOnScroll>
                <h2 className="text-3xl font-bold text-white mb-10">Experiências</h2>
            </FadeInOnScroll>
            <div>
                {EXPERIENCES.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} />
                ))}
            </div>
        </section>
    </div>
  );
};

export default About;