import { Section } from '../../shared/components/Section';
import { Category } from './components/Category';
import { CardsWrapper } from './styles';

export const Skills = () => {
  const categories = [
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
  ];

  return (
    <Section background="morning" title="Skills" id="skills">
      <CardsWrapper>
        {categories.map((category) => (
          <Category {...category} />
        ))}
      </CardsWrapper>
    </Section>
  );
};
