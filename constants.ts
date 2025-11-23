import { Education, Experience } from './types'

interface ContentData {
  role: string;
  themeLight: string;
  themeDark: string;
  languageName: string;
  sectionExperiences: string;
  sectionEducation: string;
  sectionProjects: string;
  labelPresent: string;
  labelAt: string;
  labelLink: string;
  labelGithub: string;
  labelLinkedin: string;
  labelEmailCopied: string;
  experiences: Experience[];
  education: Education[];
}

export const CONTENT: Record<'en' | 'pt', ContentData> = {
  en: {
    role: 'Software Developer',
    themeLight: 'Light',
    themeDark: 'Dark',
    languageName: 'English',
    sectionExperiences: 'EXPERIENCES',
    sectionEducation: 'EDUCATION',
    sectionProjects: 'PROJECTS & CASE STUDIES',
    labelPresent: 'PRESENT',
    labelAt: 'at',
    labelLink: 'Link',
    labelGithub: 'GitHub',
    labelLinkedin: 'LinkedIn',
    labelEmailCopied: 'E-mail copied',
    experiences: [
      {
        year: '2022',
        isPresent: true,
        role: 'Backend Software Developer',
        company: '@HST',
        companyUrl: 'https://hst.com.br/pt-br/'
      },
      {
        year: '2022',
        role: 'Jr. Backend Software Engineer',
        company: '@Tinnova',
        companyUrl: 'https://tinnova.com.br/'
      },
      {
        year: '2020',
        role: 'Jr. Backend Software Developer',
        company: '@B2ML',
        companyUrl: 'https://www.b2ml.com.br/'
      }
    ],
    education: [
      {
        year: '2016 - 2019',
        course: 'Bacharelor Degree, Information Systems',
        institution: 'FEPI'
      },
      {
        year: '2012 - 2013',
        course: 'Computer Technician',
        institution: 'COTEPAR'
      }
    ]
  },
  pt: {
    role: 'Desenvolvedor de Software',
    themeLight: 'Claro',
    themeDark: 'Escuro',
    languageName: 'Português',
    sectionExperiences: 'EXPERIÊNCIAS',
    sectionEducation: 'EDUCAÇÃO',
    sectionProjects: 'PROJETOS & ESTUDOS DE CASO',
    labelPresent: 'ATUAL',
    labelAt: 'na',
    labelLink: 'Link',
    labelGithub: 'GitHub',
    labelLinkedin: 'LinkedIn',
    labelEmailCopied: 'E-mail copiado',
    experiences: [
      {
        year: '2022',
        isPresent: true,
        role: 'Desenvolvedor de Software Backend',
        company: '@HST',
        companyUrl: 'https://hst.com.br/pt-br/'
      },
      {
        year: '2022',
        role: 'Engenheiro de Software Backend Jr.',
        company: '@Tinnova',
        companyUrl: 'https://tinnova.com.br/'
      },
      {
        year: '2020',
        role: 'Desenvolvedor de Software Backend Jr.',
        company: '@B2ML',
        companyUrl: 'https://www.b2ml.com.br/'
      }
    ],
    education: [
      {
        year: '2016 - 2019',
        course: 'Bacharelado em Sistemas de Informação',
        institution: 'FEPI'
      },
      {
        year: '2012 - 2013',
        course: 'Técnico em Informática',
        institution: 'COTEPAR'
      }
    ]
  }
};