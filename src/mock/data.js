import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diogo V. B. de Souza | Cientista de Dados', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: 'Sejam bem vindos e bem vindas ao meu site)', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Oi, meu nome é', // Hello, my name is
  name: 'Diogo V. B. de Souza', // Diogo
  subtitle: 'e sou um cientista de dados',
  cta: 'Saiba mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Sou um entusiasta e amante da tecnologia, estudo constantemente sobre estatística, machine learning, data science (ciência de dados) sou focado em engenharia 4.0, junto tecnologia e engenharia com práticas que facilitam a rastreabilidade, serialização e a tomada de decisões embasadas em informações e dados.',
  paragraphTwo:
    'Acredito que decisões tomadas com base na lógica, metodologia e estatística são essências para o sucesso, contudo a chave e o real diferencial competitivo se encontra nas pessoas e em um time bem unido voltado a um único objetivo.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1ZpYGV_S_sE2uEsHHzkWN_psbQWMVUAl5/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codenation.jpg',
    title: 'Desafio AceleraDev - Data Science | Oferecido pela Codenation',
    info:
      'Este foi um estudo que eu fiz para o curso do AceleraDev voltado a data science, este curso era oferecido pela Codenation que recentemente foi comprada pela Trybe. Neste desafio o objetivo foi desenvolver um produto para fornecer um serviço automatizado que recomenda leads para um usuário dado sua atual lista de clientes (Portfólio).',
    info2:
      'Para resolvê-lo, usei o python para os métodos de machine learning(ML) e também para a normalização, seleção e preparação dos dados.',
    url: '',
    repo: 'https://github.com/DiogoVilasBoas/Estudo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Estatistica.jpg',
    title: 'Estudos de Estatística',
    info:
      'Neste repositório do Github eu deixo todos os meus estudos referentes a estatística. Esses estudos vem de diversas fontes (alura, udemy, livros, etc...).',
    info2:
      'Para cada estudo ou curso da área da estatística que realizo, eu o registro na forma de notebook dentro deste repositório do Github para futuras consultas.',
    url: 'https://github.com/DiogoVilasBoas/Estudo',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AI.jpg',
    title: 'Modelos de Machine Learning',
    info:
      'Neste repositório eu mantenho um registro de modelos de ML (Machine Learning) que eu já apliquei em bases de testes como as do Kagle.',
    info2:
      'Esse registro me ajuda em tarefas do dia a dia assim como na hora de escolher o modelo que irei utilizar em algum determinado estudo.',
    url: 'https://github.com/DiogoVilasBoas/Estudo',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Gostaria de conversar comigo? Me manda um email e vamos combinar',
  btn: 'email',
  email: 'diogovilasboas.eng@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/boasdiogovilas/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diogovilasboasdesouza/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DiogoVilasBoas/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
