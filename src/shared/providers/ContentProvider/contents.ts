import { Language } from './types';

export const contents = {
  [Language.pt]: {
    navbar: {
      home: {
        label: 'Início',
        id: 'introduction',
      },
      timeline: {
        label: 'Linha do tempo',
        id: 'timeline',
      },
      findMe: {
        label: 'Na mídia',
        id: 'find-me',
      },
      skills: {
        label: 'Competências',
        id: 'skills',
      },
      interests: {
        label: 'Interesses',
        id: 'interests',
      },
      contact: {
        label: 'Contato',
        id: 'contact',
      },
    },
    introduction: {
      title: 'Olá, meu nome é Giovanna Freitas.',
      description: {
        lineOne:
          'Com 13 anos, descobri o mundo da programação e, desde então, venho mergulhando em cada detalhe desse universo. Atualmente, atuo como desenvolvedora front-end, onde transformo ideias em experiências digitais.',
        lineTwo:
          'Aqui, você poderá acompanhar um pouco da minha trajetória, meus projetos e meu constante aprendizado no universo da tecnologia.',
      },
    },
    timeline: {
      experiences: [
        {
          title: 'Ismart online',
          duration: '(2013 - 2015)',
          description:
            'Foi o meu primeiro contato com programação. Aprendi HTML, CSS e criação e apresentação de protótipos em grupo. Também desenvolvi aplicativos utilizando a Fábrica de Aplicativos, o que me levou a ser entrevistada por veículos como El País e Instituto Claro.',
        },
        {
          title: 'Faculdade - Análise e Desenvolvimento de Sistemas',
          duration: '(2019 - 2020)',
          description:
            'Neste curso, explorei áreas como front-end, mobile, back-end, qualidade e design de software. Também participei de projetos com empresas como a IBM, aprimorando habilidades práticas e conhecendo as demandas do mercado.',
        },
        {
          title: 'SmartMEI - Desenvolvedora Fullstack Junior',
          duration: '(2020 - 2021)',
          description:
            'Trabalhei no front-end de um projeto de pagamento em massa de funcionários PJ. Trabalhei com ReactJS, Material UI e GraphQL para requisições. Tive contato com SCRUM e versionamento no Bitbucket.',
        },
        {
          title: 'Wellhub (antigo Gympass) - Desenvolvedora front-end Junior',
          duration: '(2021 - 2022)',
          description:
            'Trabalhando em produtos digitais, participei de projetos diversos, desde legados até novos, utilizando React, Typescript e Styled Components para o front-end. Também tive contato com GraphQL para integrações com o backend. Além disso, desenvolvi testes de software (unitários e e2e) para garantir a qualidade do código.',
        },
        {
          title: 'Wellhub (antigo Gympass) - Desenvolvedora front-end Pleno',
          duration: '(2022 - atual)',
          description:
            'Além da experiência anterior, atuei também em projetos de micro-frontend, GraphQL server e Design System.  Pude me envolver em definições de produto e refinamento de tarefas para otimizar o trabalho do time. Além disso, tive foco em qualidade do software desenvolvido por mim e pelos colegas através de code reviews.',
        },
      ],
    },
    findMe: {
      description: {
        lineOne:
          'Aos 13 anos, tive a oportunidade de desenvolver um aplicativo para celulares por meio do Instituto Ismart e do projeto Ismart Online, abordando a doença que meu pai enfrentava na época: a Miastenia Grave.',
        lineTwo:
          'Utilizando a Fábrica de Aplicativos, reuni diversos conteúdos relevantes, incluindo informações oficiais da ABRAMI (Associação Brasileira de Miastenia), vídeos informativos e uma seção de interação para os usuários, onde alguns portadores ou familiares chegaram a deixar suas experiências e feedback sobre o aplicativo.',
        lineThree:
          'Essa experiência me levou a ser entrevistada por vários veículos, como El País e Instituto Claro. Saiba mais:',
      },
      magazines: [
        {
          title: 'El País',
          headline: '"Ela criou um aplicativo na escola para lidar com doença rara do pai"',
          image: 'png/magazines/el-pais.png',
          link: 'https://brasil.elpais.com/brasil/2016/07/11/politica/1468254986_782379.html',
        },
        {
          title: 'Estadão',
          headline: '"O que muda na vida de quem aprende a programar?"',
          image: 'png/magazines/estadao.png',
          link: 'https://www.estadao.com.br/link/o-que-muda-na-vida-de-quem-aprende-a-programar/',
        },
        {
          title: 'Instituto Claro',
          headline: '"Filha desenvolve aplicativo para a doença do pai"',
          image: 'png/magazines/claro.png',
          link: 'https://www.institutoclaro.org.br/educacao/nossas-novidades/reportagens/filha-desenvolve-aplicativo-para-a-doenca-do-pai/',
        },
        {
          title: 'Gazeta do Povo',
          headline: '"Aplicativo para todos"',
          image: 'png/magazines/gazeta.png',
          link: 'https://www.gazetadopovo.com.br/vida-e-cidadania/aplicativos-para-todos-edm761bax92forvdwqyfkph72/#:~:text=sociais%20cotidianos%22%2C%20diz.-,Giovanna,-Costa%20de%20Freitas',
        },
      ],
    },
    interests: {
      items: [
        {
          title: 'Liderança',
          description:
            'Durante toda a minha carreira profissional, sempre fui apaixonada por liderar iniciativas e ajudar pessoas.',
        },
        {
          title: 'Desenvolvimento Mobile',
          description:
            'Dentro do desenvolvimento front-end, o desenvolvimento mobile sempre foi o que mais me chamou a atenção. Por mais que eu não trabalhe com isso atualmente, pretendo dedicar um tempo da minha carreira como desenvolvedora mobile.',
        },
      ],
    },
    skills: {
      categories: [
        {
          title: 'Linguagens de programação',
          skills: [
            {
              title: 'Javascript',
              image: 'png/javascript.png',
            },
            {
              title: 'Typescript',
              image: 'png/typescript.png',
            },

            {
              title: 'HTML',
              image: 'png/html.png',
            },
            {
              title: 'CSS',
              image: 'png/css.png',
            },
            {
              title: 'GraphQl',
              image: 'png/graphql.png',
            },
          ],
        },
        {
          title: 'Frameworks e bibliotecas',
          skills: [
            {
              title: 'ReactJs',
              image: 'png/react.png',
            },
            {
              title: 'NextJs',
              image: 'png/nextjs.png',
            },
            {
              title: 'Styled components',
              image: 'png/styled-components.png',
            },
            {
              title: 'Material UI',
              image: 'png/material-ui.png',
            },
            {
              title: 'React Native',
              image: 'png/react.png',
            },
          ],
        },
        {
          title: 'Teste de software',
          skills: [
            {
              title: 'Jest',
              image: 'png/jest.png',
            },
            { title: 'Testing library', image: 'png/testing-library.png' },
            {
              title: 'Cypress',
              image: 'png/cypress.png',
            },
          ],
        },
        {
          title: 'Versionamento',
          skills: [
            {
              title: 'Git',
              image: 'png/git.png',
            },
            {
              title: 'Github',
              image: 'png/github.png',
            },
          ],
        },
      ],
    },
    projects: undefined,
    contact: {
      description: 'Gostou do meu trabalho? Fique à vontade para entrar em contato pelos links abaixo.',
      socialMedia: [
        {
          image: '/png/social-media/linkedin.png',
          link: 'https://www.linkedin.com/in/frgiovanna/',
          title: 'LinkedIn',
          subtitle: 'linkedin.com/in/frgiovanna',
        },
        {
          image: '/png/social-media/github.png',
          link: 'https://github.com/frgiovanna',
          title: 'Github',
          subtitle: 'github.com/frgiovanna',
        },
        {
          image: '/png/social-media/email.png',
          link: 'mailto:giovannacnf@gmail.com',
          title: 'E-mail',
          subtitle: 'giovannacnf@gmail.com',
        },
      ],
    },
  },
  [Language.en]: {
    navbar: {
      home: {
        label: 'Introduction',
        id: 'introduction',
      },
      timeline: {
        label: 'Timeline',
        id: 'timeline',
      },
      findMe: {
        label: 'Media Mentions',
        id: 'find-me',
      },
      skills: {
        label: 'Skills',
        id: 'skills',
      },
      interests: {
        label: 'Interests',
        id: 'interests',
      },
      contact: {
        label: 'Contact',
        id: 'contact',
      },
    },
    introduction: {
      title: 'Hey, my name is Giovanna Freitas.',
      description: {
        lineOne:
          'When I was 13, I discovered the world of programming. Since then, I have immersed myself in every detail of this universe. Currently, I work as a front-end developer, transforming ideas into digital experiences.',
        lineTwo: 'Here, you can keep up with my journey, projects, and ongoing learning in the world of technology.',
      },
    },
    timeline: {
      experiences: [
        {
          title: 'Ismart online',
          duration: '(2013 - 2015)',
          description:
            'It was my first experience with programming. I learned HTML, CSS, and how to create and present prototypes in a group. I also developed applications using the "Fábrica de Aplicativos" tool, which led to interviews with some known Brazilian media outlets such as El País and Instituto Claro.',
        },
        {
          title: 'College - System of Analisys and Development',
          duration: '(2019 - 2020)',
          description:
            'During this course, I delved into various areas including front-end, mobile, back-end, quality, and software design. Furthermore, I actively engaged in projects with top companies like IBM, honing practical skills and gaining an in-depth understanding of market demands.',
        },
        {
          title: 'SmartMEI - Full-stack Developer Junior',
          duration: '(2020 - 2021)',
          description:
            'I worked on the front end of a project for mass payment of corporate employees using ReactJS, Material UI, and GraphQL for requests. I also had contact with SCRUM and versioning in Bitbucket.',
        },
        {
          title: 'Wellhub (former Gympass) - Front-end Developer Junior',
          duration: '(2021 - 2022)',
          description:
            "While working on web products, I've been involved in a range of projects, both old and new, where I've utilized React, Typescript, and Styled Components for the frontend. Additionally, I've worked with GraphQL to integrate with the backend. Furthermore, I've been responsible for developing software tests (including unit and end-to-end tests) to maintain high code quality.",
        },
        {
          title: 'Wellhub (former Gympass) - Front-end Developer Mid-level',
          duration: '(2022 - Present)',
          description:
            'In addition to my previous experience, I have also worked on micro-frontend, GraphQL server and Design System projects. I was able to get involved in product definitions and task refinement to optimize work time. In addition, I focus on the quality of the software developed by me and my colleagues through code reviews.',
        },
      ],
    },
    findMe: {
      description: {
        lineOne:
          'At the age of 13, I had the opportunity to develop a mobile application through the Ismart Institute and the Ismart Online project, addressing the disease my father faced at the time: Myasthenia Gravis.',
        lineTwo:
          'Using the "Fábrica de Aplicativos" tool, I collected various relevant contents, including official information from ABRAMI (Brazilian Myasthenia Association), informative videos, and an interactive section for users. Some individuals dealing with the condition and their family members shared their experiences and feedback about the app.',
        lineThree:
          'As a result of this experience, I had the opportunity to be interviewed by some Brazilian known media outlets, including El País and Instituto Claro. Find out more:',
      },
      magazines: [
        {
          title: 'El País',
          headline: '"She created an app at school to deal with her father\'s rare disease"',
          image: 'png/magazines/el-pais.png',
          link: 'https://brasil.elpais.com/brasil/2016/07/11/politica/1468254986_782379.html',
        },
        {
          title: 'Estadão',
          headline: '"What changes in the lives of those who learn to program?"',
          image: 'png/magazines/estadao.png',
          link: 'https://www.estadao.com.br/link/o-que-muda-na-vida-de-quem-aprende-a-programar/',
        },
        {
          title: 'Instituto Claro',
          headline: '"Daughter develops app to deal with father\'s disease"',
          image: 'png/magazines/claro.png',
          link: 'https://www.institutoclaro.org.br/educacao/nossas-novidades/reportagens/filha-desenvolve-aplicativo-para-a-doenca-do-pai/',
        },
        {
          title: 'Gazeta do Povo',
          headline: '"App for all"',
          image: 'png/magazines/gazeta.png',
          link: 'https://www.gazetadopovo.com.br/vida-e-cidadania/aplicativos-para-todos-edm761bax92forvdwqyfkph72/#:~:text=sociais%20cotidianos%22%2C%20diz.-,Giovanna,-Costa%20de%20Freitas',
        },
      ],
    },
    interests: {
      items: [
        {
          title: 'Leadership',
          description:
            'Throughout my professional career, I have always been passionate about leading initiatives and helping people.',
        },
        {
          title: 'Mobile development',
          description:
            "Within front-end development, mobile development has always been the one that caught my attention the most. Although I'm not currently working with it, I plan to dedicate some time in my career to becoming a mobile developer.",
        },
      ],
    },
    skills: {
      categories: [
        {
          title: 'Languages',
          skills: [
            {
              title: 'Javascript',
              image: 'png/javascript.png',
            },
            {
              title: 'Typescript',
              image: 'png/typescript.png',
            },

            {
              title: 'HTML',
              image: 'png/html.png',
            },
            {
              title: 'CSS',
              image: 'png/css.png',
            },
            {
              title: 'GraphQl',
              image: 'png/graphql.png',
            },
          ],
        },
        {
          title: 'Frameworks and libraries',
          skills: [
            {
              title: 'ReactJs',
              image: 'png/react.png',
            },
            {
              title: 'NextJs',
              image: 'png/nextjs.png',
            },
            {
              title: 'Styled components',
              image: 'png/styled-components.png',
            },
            {
              title: 'Material UI',
              image: 'png/material-ui.png',
            },
            {
              title: 'React Native',
              image: 'png/react.png',
            },
          ],
        },
        {
          title: 'Software testing',
          skills: [
            {
              title: 'Jest',
              image: 'png/jest.png',
            },
            { title: 'Testing library', image: 'png/testing-library.png' },
            {
              title: 'Cypress',
              image: 'png/cypress.png',
            },
          ],
        },
        {
          title: 'Versioning',
          skills: [
            {
              title: 'Git',
              image: 'png/git.png',
            },
            {
              title: 'Github',
              image: 'png/github.png',
            },
          ],
        },
      ],
    },
    projects: undefined,
    contact: {
      description:
        "Did you enjoy my work? Don't hesitate to reach out to me using the links below. I'm open for a friendly chat!",
      socialMedia: [
        {
          image: '/png/social-media/linkedin.png',
          link: 'https://www.linkedin.com/in/frgiovanna/',
          title: 'LinkedIn',
          subtitle: 'linkedin.com/in/frgiovanna',
        },
        {
          image: '/png/social-media/github.png',
          link: 'https://github.com/frgiovanna',
          title: 'Github',
          subtitle: 'github.com/frgiovanna',
        },
        {
          image: '/png/social-media/email.png',
          link: 'mailto:giovannacnf@gmail.com',
          title: 'E-mail',
          subtitle: 'giovannacnf@gmail.com',
        },
      ],
    },
  },
};
