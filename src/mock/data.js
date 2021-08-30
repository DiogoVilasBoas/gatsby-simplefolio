import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diogo V. B. | Agente Local de Inovação no SEBRAE', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: 'Sejam bem vindos e bem vindas ao meu site)', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Você quer saber como eu, Diogo, ', // Hello, my name is
  name: 'de forma gratuita ', // Diogo
  subtitle: 'posso ajudar a sua empresa a aumentar o seu faturamento e reduzir os custos?',
  cta: 'veja como?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Não é de hoje que as empresas desejam aumentar o faturamento e reduzir os seus custos. Mas e se eu te dissesse que o SEBRAE em parceria com o ministério da economia e diversos outros criaram um programa que leva exatamente isso para as micro e pequenas empresas? Bem este é o programa Brasil Mais/Agentes Locais de Inovação e eu Diogo faço parte dele como um Agente Local de Inovação ou melhor dizendo um ALI.',
  paragraphTwo:
    'O programa é um sucesso, até o momento 81% das empresas participantes conseguiram conquistar novos clientes e que um a cada três conseguiu reduzir os custos da empresa em até 20% (fonte: https://brasilmais.economia.gov.br/noticia/sebrae-fala-sobre-o-programa-brasil-mais) com objetivo mínimo de melhorar a produtividade da empresa em 10%.',
  paragraphThree: 'Legal não é mesmo? O programa acontece no Brasil inteiro, inclusive aqui no norte de SC onde eu assim como meus colegas atuamos atendendo as microempresas e empresas de pequeno (infelizmente não atendemos os MEIs). São poucas vagas por isso para garantir a sua na fila de espera clique em “se inscreva”.',
  resume: 'https://forms.gle/qm6GaGghcHpzXkKt8', // if no resume, the button will not show up
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
    url: 'https://www.codenation.dev/',
    repo: 'https://github.com/DiogoVilasBoas/Acelera_Dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Estatistica.jpg',
    title: 'Estudos de Estatística',
    info:
      'Neste repositório do Github eu deixo todos os meus estudos referentes a estatística. Esses estudos vem de diversas fontes (alura, udemy, livros, etc...).',
    info2:
      'Para cada estudo ou curso da área da estatística que realizo, eu o registro na forma de notebook dentro deste repositório do Github para futuras consultas.',
    url: 'https://github.com/DiogoVilasBoas/Alura_Estatistica_parte1',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Alura.jpg',
    title: 'Cursos do Alura',
    info:
      'No intuito da melhoria contínua e do meu autodesenvolvimento, eu estipulei para mim mesmo uma meta anual de realizar na média pelo menos uma hora de estudo por dia. Dentro disso eu encontrei dentro da plataforma do Alura, uma vasta variedade de cursos para suprir essa minha cede por conhecimento.',
    info2:
      'No link abaixo são mostrados os meus certificados e uma lista de todos os cursos que já realizei na plataforma, desde oratório, inteligência emocional até cursos mais específicos como NLP, IA e programação em Python.',
    url:
      'https://cursos.alura.com.br/user/diogovilasboas-eng/fullCertificate/2cbee18a3c282db447abdb107088cdd9',
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
