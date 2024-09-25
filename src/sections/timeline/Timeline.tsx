import { Section } from '../../shared/components/Section';
import { AlternatingTimeline } from './components/AlternatingTimeline/AlternatingTimeline';
import RightTimeline from './components/RightTimeline/RightTimeline';
import { Hider } from './styles';

export const Timeline = () => {
  const mockedContent = [
    {
      title: 'Ismart online',
      duration: '(2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online',
      duration: '(2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online',
      duration: '(2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online',
      duration: '(2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online',
      duration: '(2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
  ];

  return (
    <Section background="fog" title="Experience" id="timeline">
      <Hider>
        <AlternatingTimeline content={mockedContent} />
        <RightTimeline content={mockedContent} />
      </Hider>
    </Section>
  );
};
