import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import FadeInOnScroll from '../components/FadeInOnScroll';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <FadeInOnScroll>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-black-700 rounded-lg overflow-hidden h-full flex flex-col group transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img 
          src={project.images[0]} 
          alt={`${project.title} screenshot 1`} 
          className="w-full h-56 object-cover"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-grey text-base flex-grow">{project.description}</p>
        </div>
      </div>
    </a>
  </FadeInOnScroll>
);


const Home: React.FC = () => {
  return (
    <div>
      <FadeInOnScroll>
        <section className="mb-24 md:mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            Software Developer, morando em Minas Gerais, Brasil.
          </h1>
          <p className="text-grey mt-6 text-xl md:text-2xl max-w-3xl">
            Com experiência em construir aplicações web seguras e escaláveis, utilizando diversas tecnologias e frameworks.
          </p>
          <p className="text-grey mt-4 text-xl md:text-2xl max-w-3xl">
            Tenho mais de 6 anos de experiência profissional, com interesse em boas práticas e design de soluções.
          </p>
        </section>
      </FadeInOnScroll>

      <section>
        <FadeInOnScroll>
          <h2 className="text-4xl font-bold text-white mb-12">Projetos</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;